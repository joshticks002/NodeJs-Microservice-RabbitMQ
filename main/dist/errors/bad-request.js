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
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = StatusCodes.BAD_REQUEST;
        _this.message = message;
        return _this;
    }
    return BadRequestError;
}(custom_api_1.default));
exports.default = BadRequestError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2JhZC1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxXQUFXLEdBQUssT0FBTyxDQUFDLG1CQUFtQixDQUFDLFlBQWpDLENBQWtDO0FBQ3JELDREQUEwQztBQUUxQztJQUE4QixtQ0FBYztJQUkxQyx5QkFBWSxPQUFlO1FBQTNCLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFGQyxLQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7O0lBQ3hCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFURCxDQUE4QixvQkFBYyxHQVMzQztBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9