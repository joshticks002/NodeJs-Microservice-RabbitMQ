import NotFoundError from "../errors/not-found";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import listRange from "../utils/paginate-data";
import { IPRODUCT } from "../models/product-type";
import BadRequestError from "../errors/bad-request";
const Product = require("../models/product");
const amqp = require("amqplib");
require("dotenv").config();

let channel, connection;

const connect = async () => {
  const amqpServer = process.env.AMQP_SERVER;
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
};
connect();

export const getProducts = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const products: IPRODUCT[] = await Product.find();

    res.status(200).json({
      message: "Retrieved all products",
      data: {
        products,
      },
      status: true,
      statusCode: 200,
    });
  }
);

export const likeProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const isValidProduct = await Product.findOne({ _id: id });

    if (!isValidProduct) {
      throw new NotFoundError(`Product not found`);
    }

    isValidProduct.likes++;

    await Product.updateOne(
      { _id: id },
      {
        likes: isValidProduct.likes,
      }
    );
    channel.sendToQueue(
      "PRODUCT_UPDATE",
      Buffer.from(JSON.stringify(isValidProduct))
    );

    res.status(200).json({
      message: "Product updated successfully",
      data: {},
      status: true,
      statusCode: 200,
    });
  }
);
