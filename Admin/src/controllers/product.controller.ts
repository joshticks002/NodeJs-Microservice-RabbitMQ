import { ProductService } from "../resolvers/product.resolver";
import ApplicationError from "../errors/application-error";
import { Request, Response } from "express";

const { getAll, getProduct, createProduct } = new ProductService();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAll();

    res.status(200).json({
      message: "Retrieved all products",
      data: products,
      status: true,
      statusCode: 200,
    });
  } catch (err) {
    throw new ApplicationError(`${err.message}`);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);

    res.status(200).json({
      message: "Product added successfully",
      data: product,
      status: true,
      statusCode: 200,
    });
  } catch (err) {
    throw new ApplicationError(`${err.message}`);
  }
};
