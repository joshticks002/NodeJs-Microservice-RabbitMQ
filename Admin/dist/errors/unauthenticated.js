"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCodes = require('http-status-codes').StatusCodes;
var custom_api_1 = __importDefault(require("./custom-api"));
var UnauthenticatedError = /** @class */ (function (_super) {
    __extends(UnauthenticatedError, _super);
    function UnauthenticatedError(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = StatusCodes.UNAUTHORIZED;
        _this.message = message;
        return _this;
    }
    return UnauthenticatedError;
}(custom_api_1.default));
exports.default = UnauthenticatedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRoZW50aWNhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy91bmF1dGhlbnRpY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLFdBQVcsR0FBSyxPQUFPLENBQUMsbUJBQW1CLENBQUMsWUFBakMsQ0FBa0M7QUFDckQsNERBQTBDO0FBRTFDO0lBQW1DLHdDQUFjO0lBSS9DLDhCQUFZLE9BQWU7UUFBM0IsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FHZjtRQUZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUMzQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTs7SUFDeEIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVRELENBQW1DLG9CQUFjLEdBU2hEO0FBRUQsa0JBQWUsb0JBQW9CLENBQUMifQ==