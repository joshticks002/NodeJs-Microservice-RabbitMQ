import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/error-handler";
import { PostgresDataSource } from "./database/db";
import router from "./routes/product.routes";

dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
  })
);
app.use(express.json());
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
