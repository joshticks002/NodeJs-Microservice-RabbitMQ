import { Router, Request, Response } from "express";
import { getProducts } from "../controllers/product.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Service Running Fine",
    status: true,
    statusCode: 200,
    data: [],
  });
});
router.get("/products", getProducts);

export default router;
