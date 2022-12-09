import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const PostgresDataSource = new DataSource({
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
