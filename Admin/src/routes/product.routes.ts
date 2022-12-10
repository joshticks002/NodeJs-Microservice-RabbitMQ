import { Router, Request, Response } from "express";
import { validateRequestParams } from "../middleware/validate-request-params";
import validateProductData from "../middleware/validate-product-data";
import validateDataPatch from "../middleware/validate-patch-data";
import {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  likeProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Service Running Fine",
    data: {},
    status: true,
    statusCode: 200,
  });
});

router
  .route("/api/v1/products")
  .get(getProducts)
  .post(validateProductData, addProduct);
router
  .route("/api/v1/products/:id")
  .all(validateRequestParams)
  .get(getProduct)
  .put(validateDataPatch, updateProduct)
  .delete(deleteProduct);
router.patch("/api/v1/products/:id/like", validateRequestParams, likeProduct);

export default router;
