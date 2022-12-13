import NotFoundError from "../errors/not-found";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import listRange from "../utils/paginate-data";
import { IPRODUCT } from "../models/product-type";
import BadRequestError from "../errors/bad-request";
const Product = require("../models/product");

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
