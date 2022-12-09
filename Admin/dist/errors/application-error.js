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
var StatusCodes = require("http-status-codes").StatusCodes;
var custom_api_1 = __importDefault(require("./custom-api"));
var ApplicationError = /** @class */ (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(message) {
        var _this = _super.call(this, message) || this;
        (_this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR),
            (_this.message = message);
        return _this;
    }
    return ApplicationError;
}(custom_api_1.default));
exports.default = ApplicationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2FwcGxpY2F0aW9uLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxXQUFXLEdBQUssT0FBTyxDQUFDLG1CQUFtQixDQUFDLFlBQWpDLENBQWtDO0FBQ3JELDREQUEwQztBQUUxQztJQUErQixvQ0FBYztJQUkzQywwQkFBWSxPQUFlO1FBQTNCLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFGQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFDO1lBQ25ELENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQzs7SUFDN0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVRELENBQStCLG9CQUFjLEdBUzVDO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==