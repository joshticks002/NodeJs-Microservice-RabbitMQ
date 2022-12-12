import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/error-handler";
const { connectDB } = require("./database/db");

connectDB();
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
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
