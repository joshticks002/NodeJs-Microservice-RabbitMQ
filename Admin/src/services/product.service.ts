import { PostgresDataSource } from "../database/db";
import { Product } from "../entity/product";

export class ProductService {
  async getAll(query: Record<string, any>) {
    return await PostgresDataSource.manager.find(Product, query);
  }

  async getProduct(query: Record<string, any>) {
    return await PostgresDataSource.manager.findOne(Product, { where: query });
  }

  async createProduct(query: Record<string, any>) {
    const product = PostgresDataSource.manager.create(Product, query);
    return await PostgresDataSource.manager.save(product);
  }

  async getCount() {
    return await PostgresDataSource.manager.count(Product);
  }
}
