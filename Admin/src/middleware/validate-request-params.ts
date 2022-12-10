import { Request, Response, NextFunction } from "express";
import BadRequestError from "../errors/bad-request";
import expressAsyncHandler from "express-async-handler";

export const validateRequestParams = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (isNaN(Number(req.params.id))) {
      throw new BadRequestError("Invalid Request");
    }
    next();
  }
);
