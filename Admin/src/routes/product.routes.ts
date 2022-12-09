import { Router, Request, Response } from "express";
import { validateRequestParams } from "../middleware/request-params-handler";
import {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Service Running Fine",
    status: true,
    statusCode: 200,
    data: [],
  });
});

router.route("/api/v1/products").get(getProducts).post(addProduct);
router
  .route("/api/v1/products/:id")
  .all(validateRequestParams)
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
