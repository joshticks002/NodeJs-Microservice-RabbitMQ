import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { DataSource } from "typeorm";

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

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST as string,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_NAME as string,
  password: process.env.PG_PASSWORD as string,
  database: process.env.DATABASE as string,
  entities: ["dist/entity/*.js"],
  logging: false,
  synchronize: true,
});

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
