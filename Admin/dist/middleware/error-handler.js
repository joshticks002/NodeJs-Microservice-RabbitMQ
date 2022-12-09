"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_alert_1 = __importDefault(require("../errors/error-alert"));
var StatusCodes = require("http-status-codes").StatusCodes;
var errorHandler = function (err, req, res, next) {
    var errorAlert = new error_alert_1.default(err.message, err.name);
    errorAlert.notify();
    var statusCode = err.statusCode
        ? err.statusCode
        : StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        message: err.message || "INTERNAL SERVER ERROR",
        data: {},
        status: statusCode,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxzRUFBK0M7QUFFdkMsSUFBQSxXQUFXLEdBQUssT0FBTyxDQUFDLG1CQUFtQixDQUFDLFlBQWpDLENBQWtDO0FBRXJELElBQU0sWUFBWSxHQUFHLFVBQ25CLEdBQWMsRUFDZCxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO0lBRWxCLElBQU0sVUFBVSxHQUFHLElBQUkscUJBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFcEIsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVU7UUFDL0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUM7SUFFdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksdUJBQXVCO1FBQy9DLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLFVBQVU7S0FDbkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsWUFBWSxDQUFDIn0=