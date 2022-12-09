"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var db_1 = require("../database/db");
var product_1 = require("../entity/product");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.PostgresDataSource.manager.find(product_1.Product)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.getProduct = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.PostgresDataSource.manager.findOne(product_1.Product, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.createProduct = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = db_1.PostgresDataSource.manager.create(product_1.Product, query);
                        return [4 /*yield*/, db_1.PostgresDataSource.manager.save(product)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvcHJvZHVjdC5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsNkNBQTRDO0FBRTVDO0lBQUE7SUFhQSxDQUFDO0lBWk8sK0JBQU0sR0FBWjs7Ozs0QkFDUyxxQkFBTSx1QkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFPLENBQUMsRUFBQTs0QkFBckQsc0JBQU8sU0FBOEMsRUFBQzs7OztLQUN2RDtJQUVLLG1DQUFVLEdBQWhCLFVBQWlCLEtBQTBCOzs7OzRCQUNsQyxxQkFBTSx1QkFBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUE7NEJBQS9ELHNCQUFPLFNBQXdELEVBQUM7Ozs7S0FDakU7SUFFSyxzQ0FBYSxHQUFuQixVQUFvQixLQUEwQjs7Ozs7O3dCQUN0QyxPQUFPLEdBQUcsdUJBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMzRCxxQkFBTSx1QkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzRCQUFyRCxzQkFBTyxTQUE4QyxFQUFDOzs7O0tBQ3ZEO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLHdDQUFjIn0=