import { Router, Request, Response } from "express";
import { getProducts, addProduct } from "../controllers/product.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Service Running Fine",
    status: true,
    statusCode: 200,
    data: [],
  });
});
router.route("/products").get(getProducts).post(addProduct);

export default router;
