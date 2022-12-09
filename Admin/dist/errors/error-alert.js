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
var events_1 = __importDefault(require("events"));
var EventEmitter = events_1.default.EventEmitter;
var ErrorAlert = /** @class */ (function (_super) {
    __extends(ErrorAlert, _super);
    function ErrorAlert(msg, type) {
        var _this = _super.call(this) || this;
        _this.message = msg;
        _this.errorType = type;
        return _this;
    }
    ErrorAlert.prototype.notify = function () {
        this.addListener("error", this.sendError);
        this.emit("error");
    };
    ErrorAlert.prototype.sendError = function () {
        if (process.env.NODE_ENV === "production") {
            console.log("A new ".concat(this.errorType, " : ").concat(this.message));
        }
        else {
            console.log("A new ".concat(this.errorType, " : ").concat(this.message));
        }
    };
    return ErrorAlert;
}(EventEmitter));
exports.default = ErrorAlert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2Vycm9yLWFsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTRCO0FBRXBCLElBQUEsWUFBWSxHQUFLLGdCQUFNLGFBQVgsQ0FBWTtBQUVoQztJQUF5Qiw4QkFBWTtJQUduQyxvQkFBWSxHQUFXLEVBQUUsSUFBWTtRQUFyQyxZQUNFLGlCQUFPLFNBR1I7UUFGQyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7SUFDeEIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQVMsSUFBSSxDQUFDLFNBQVMsZ0JBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQVMsSUFBSSxDQUFDLFNBQVMsZ0JBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBckJELENBQXlCLFlBQVksR0FxQnBDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=