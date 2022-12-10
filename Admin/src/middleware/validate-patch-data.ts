import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";

const validateDataPatch = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      title: Joi.string(),
      image: Joi.string(),
      likes: Joi.number(),
    });

    await schema.validateAsync(req.body);

    next();
  }
);

export default validateDataPatch;
