import { ProductService } from "../services/product.service";
import ApplicationError from "../errors/application-error";
import { Request, Response } from "express";
import listRange from "../utils/paginate-data";
import { Like } from "typeorm";

const { getAll, getCount, createProduct } = new ProductService();

export const getProducts = async (req: Request, res: Response) => {
  try {
    let query: Record<string, any> = {};

    if (req.query.title) {
      query.where = {
        title: Like(`%${req.query.title}%`),
      };
    }

    if (req.query.page) {
      const { startIndex, endIndex } = listRange(Number(req.query.page));
      query.page = req.query.page;
      query.skip = startIndex;
      query.take = endIndex;
    }

    const [products, productsCount] = await Promise.all([
      getAll({ ...query }),
      getCount(),
    ]);

    res.status(200).json({
      message: "Retrieved all products",
      data: {
        total: productsCount,
        page: query.page ? Number(query.page) : 1,
        per_page: 10,
        total_pages: productsCount > 10 ? productsCount / 10 : 1,
        data: products,
      },
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

    res.status(201).json({
      message: "Product added successfully",
      data: {},
      status: true,
      statusCode: 201,
    });
  } catch (err) {
    throw new ApplicationError(`${err.message}`);
  }
};
