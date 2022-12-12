"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_api_1 = __importDefault(require("./custom-api"));
var unauthenticated_1 = __importDefault(require("./unauthenticated"));
var not_found_1 = __importDefault(require("./not-found"));
var bad_request_1 = __importDefault(require("./bad-request"));
var errors = {
    CustomAPIError: custom_api_1.default,
    UnauthenticatedError: unauthenticated_1.default,
    NotFoundError: not_found_1.default,
    BadRequestError: bad_request_1.default,
};
exports.default = errors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQXlDO0FBQ3pDLHNFQUFvRDtBQUNwRCwwREFBdUM7QUFDdkMsOERBQTJDO0FBRTNDLElBQU0sTUFBTSxHQUFHO0lBQ2IsY0FBYyxzQkFBQTtJQUNkLG9CQUFvQiwyQkFBQTtJQUNwQixhQUFhLHFCQUFBO0lBQ2IsZUFBZSx1QkFBQTtDQUNoQixDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=