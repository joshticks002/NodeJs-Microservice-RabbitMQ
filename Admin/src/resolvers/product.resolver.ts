import { PostgresDataSource } from "../app";
import { Product } from "../entity/product";

export class UserResolver {
  productRepo = PostgresDataSource.getRepository(Product);
}
