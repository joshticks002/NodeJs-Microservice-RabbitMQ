import { PostgresDataSource } from "../database/db";
import { Product } from "../entity/product";
import { IPRODUCT } from "../entity/product-type";

export class ProductService {
  async findBy(query: Record<string, any>) {
    return await PostgresDataSource.manager.find(Product, {
      take: 10,
      skip: 0,
      ...query,
    });
  }

  async findOneBy(query: Record<string, any>) {
    return await PostgresDataSource.manager.findOne(Product, { where: query });
  }

  async create(data: IPRODUCT) {
    const product = PostgresDataSource.manager.create(Product, data);
    return await PostgresDataSource.manager.save(product);
  }

  async getCount() {
    return await PostgresDataSource.manager.count(Product);
  }

  async update(product: IPRODUCT, query: Record<string, any>) {
    PostgresDataSource.manager.merge(Product, product, query);
    return await PostgresDataSource.manager.save(product);
  }

  async remove(id: number) {
    return await PostgresDataSource.manager.delete(Product, { id });
  }

  async save(product: IPRODUCT) {
    return await PostgresDataSource.manager.save(product);
  }
}
