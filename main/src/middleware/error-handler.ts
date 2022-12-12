import { NextFunction, Request, Response } from "express";
import ErrorAlert from "../errors/error-alert";
import { HttpError } from "http-errors";
const { StatusCodes } = require("http-status-codes");

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorAlert = new ErrorAlert(err.message, err.name);
  errorAlert.notify();

  const statusCode = err.statusCode
    ? err.statusCode
    : StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    message: err.message || "INTERNAL SERVER ERROR",
    data: {},
    statusCode: statusCode,
    status: false,
  });
};

export default errorHandler;
