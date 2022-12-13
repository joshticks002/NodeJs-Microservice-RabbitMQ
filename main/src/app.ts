import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/error-handler";
const { connectDB } = require("./connections/db");
import * as amqp from "amqplib";
import { IPRODUCT } from "./models/product-type";
import router from "./routes/product.routes";
const Product = require("./models/product");

let channel, connection;

connectDB();
dotenv.config();

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
  await channel.assertQueue("PRODUCT_CREATED", options);
  await channel.assertQueue("PRODUCT_UPDATED", options);
  await channel.assertQueue("PRODUCT_DELETED", options);
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
    "PRODUCT_CREATED",
    async (msg: amqp.Message | Record<string, any>) => {
      const data: IPRODUCT = JSON.parse(msg.content);
      const product = {
        admin_id: Number(data.id),
        title: data.title,
        image: data.image,
        likes: data.likes,
      };
      const prd = await Product.create(product);
      console.log("successfully created");
    },
    { noAck: true }
  );

  channel.consume(
    "PRODUCT_UPDATED",
    async (msg: amqp.Message | Record<string, any>) => {
      const data: IPRODUCT = JSON.parse(msg.content);
      const product = {
        admin_id: Number(data.id),
        title: data.title,
        image: data.image,
        likes: data.likes,
      };
      const upPrd = await Product.updateOne(
        { admin_id: product.admin_id },
        product
      );
      console.log("successfully updated");
    },
    { noAck: true }
  );

  channel.consume(
    "PRODUCT_DELETED",
    async (msg: amqp.Message) => {
      await Product.findOneAndRemove({
        admin_id: parseInt(msg.content.toString()),
      });
      console.log("successfully deleted");
    },
    { noAck: true }
  );
});

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
