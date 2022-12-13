import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as amqp from "amqplib";
import errorHandler from "./middleware/error-handler";
import { PostgresDataSource } from "./database/db";
import router from "./routes/product.routes";
import { ProductService } from "./services/product.service";
const { update, findOneBy } = new ProductService();

dotenv.config();

let channel, connection;

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

const connect = async () => {
  const options = {
    durable: false,
    autoDelete: true,
  };
  const amqpServer = process.env.AMQP_SERVER;
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("PRODUCT_UPDATE", options);
};

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
  })
);
app.use(express.json());

connect().then(() => {
  channel.consume(
    "PRODUCT_UPDATE",
    async (msg: amqp.Message | Record<string, any>) => {
      const data = JSON.parse(msg.content);
      const isValidProduct = await findOneBy({ id: parseInt(data.admin_id) });

      await update(isValidProduct, { likes: data.likes });
      console.log("successfully updated");
    },
    { noAck: true }
  );
});

app.use(router);
app.use(errorHandler);

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
