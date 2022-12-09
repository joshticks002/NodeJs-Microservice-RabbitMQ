"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCodes = require("http-status-codes").StatusCodes;
var errorHandler = function (err, req, res, next) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFUSxJQUFBLFdBQVcsR0FBSyxPQUFPLENBQUMsbUJBQW1CLENBQUMsWUFBakMsQ0FBa0M7QUFFckQsSUFBTSxZQUFZLEdBQUcsVUFDbkIsR0FBYyxFQUNkLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7SUFFbEIsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVU7UUFDL0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUM7SUFFdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksdUJBQXVCO1FBQy9DLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLFVBQVU7S0FDbkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsWUFBWSxDQUFDIn0=