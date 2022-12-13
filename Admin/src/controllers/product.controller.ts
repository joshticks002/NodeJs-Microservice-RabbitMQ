import { ProductService } from "../services/product.service";
import NotFoundError from "../errors/not-found";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import listRange from "../utils/paginate-data";
import { Like } from "typeorm";
import { IPRODUCT } from "../entity/product-type";
import BadRequestError from "../errors/bad-request";
const amqp = require("amqplib");

let channel, connection;

const connect = async () => {
  const amqpServer = process.env.AMQP_SERVER;
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
};
connect();

const { findBy, getCount, findOneBy, remove, create, update, save } =
  new ProductService();

export const getProducts = expressAsyncHandler(
  async (req: Request, res: Response) => {
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
      findBy({ ...query }),
      getCount(),
    ]);

    res.status(200).json({
      message: "Retrieved all products",
      data: {
        total: productsCount,
        page: query.page ? Number(query.page) : 1,
        per_page: 10,
        total_pages: productsCount > 10 ? productsCount / 10 : 1,
        products,
      },
      status: true,
      statusCode: 200,
    });
  }
);

export const addProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;

    const isValidProduct = ((await findOneBy({ title })) as IPRODUCT) || null;

    if (isValidProduct) {
      throw new BadRequestError(`Product already exist`);
    }

    const product = await create(req.body);
    channel.sendToQueue(
      "PRODUCT_CREATED",
      Buffer.from(JSON.stringify(product))
    );

    res.status(201).json({
      message: "Product added successfully",
      data: {},
      status: true,
      statusCode: 201,
    });
  }
);

export const getProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const product =
      ((await findOneBy({ id: req.params.id })) as IPRODUCT) || null;

    if (!product) {
      throw new NotFoundError(`Product not found`);
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      data: {
        product,
      },
      status: true,
      statusCode: 200,
    });
  }
);

export const updateProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const isValidProduct = await findOneBy({ id: req.params.id });

    if (!isValidProduct) {
      const product = await create(req.body);
      channel.sendToQueue(
        "PRODUCT_CREATED",
        Buffer.from(JSON.stringify(product))
      );

      res.status(201).json({
        message: "Product added successfully",
        data: {},
        status: true,
        statusCode: 201,
      });
      return;
    }

    const updatedProduct = await update(isValidProduct, req.body);
    channel.sendToQueue(
      "PRODUCT_UPDATED",
      Buffer.from(JSON.stringify(updatedProduct))
    );

    res.status(200).json({
      message: "Product updated successfully",
      data: {},
      status: true,
      statusCode: 200,
    });
  }
);

export const deleteProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const isValidProduct = await findOneBy({ id });

    if (!isValidProduct) {
      throw new NotFoundError(`Product not found`);
    }

    const product = await remove(Number(id));
    channel.sendToQueue("PRODUCT_DELETED", Buffer.from(id));

    res.status(204).json({
      message: "Product successfully removed",
      data: {},
      status: true,
      statusCode: 204,
    });
  }
);

export const likeProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const isValidProduct = await findOneBy({ id: req.params.id });

    if (!isValidProduct) {
      throw new NotFoundError(`Product not found`);
    }

    isValidProduct.likes++;

    const updatedProduct = await save(isValidProduct);
    channel.sendToQueue(
      "PRODUCT_UPDATED",
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
