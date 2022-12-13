import { Router, Request, Response } from "express";
import { validateRequestParams } from "../middleware/validate-request-params";
import { getProducts, likeProduct } from "../controllers/product.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Main Service Running Fine",
    data: {},
    status: true,
    statusCode: 200,
  });
});

router.route("/api/v1/products").get(getProducts);
router.patch("/api/v1/products/:id/like", validateRequestParams, likeProduct);

export default router;
