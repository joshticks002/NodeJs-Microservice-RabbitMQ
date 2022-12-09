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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProducts = void 0;
var product_resolver_1 = require("../resolvers/product.resolver");
var application_error_1 = __importDefault(require("../errors/application-error"));
var _a = new product_resolver_1.ProductService(), getAll = _a.getAll, getProduct = _a.getProduct, createProduct = _a.createProduct;
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        try {
            products = getAll();
            res.status(200).json({
                message: "Retrieved all products",
                data: products,
                status: true,
                statusCode: 200,
            });
        }
        catch (err) {
            throw new application_error_1.default("".concat(err.message));
        }
        return [2 /*return*/];
    });
}); };
exports.getProducts = getProducts;
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        try {
            product = createProduct(req.body);
            res.status(200).json({
                message: "Product added successfully",
                data: product,
                status: true,
                statusCode: 200,
            });
        }
        catch (err) {
            throw new application_error_1.default("".concat(err.message));
        }
        return [2 /*return*/];
    });
}); };
exports.addProduct = addProduct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Byb2R1Y3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBK0Q7QUFDL0Qsa0ZBQTJEO0FBR3JELElBQUEsS0FBd0MsSUFBSSxpQ0FBYyxFQUFFLEVBQTFELE1BQU0sWUFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxhQUFhLG1CQUF5QixDQUFDO0FBRTVELElBQU0sV0FBVyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7OztRQUMzRCxJQUFJO1lBQ0ksUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBRTFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxJQUFJLDJCQUFnQixDQUFDLFVBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7U0FDOUM7OztLQUNGLENBQUM7QUFiVyxRQUFBLFdBQVcsZUFhdEI7QUFFSyxJQUFNLFVBQVUsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7UUFDMUQsSUFBSTtZQUNJLE9BQU8sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxJQUFJLDJCQUFnQixDQUFDLFVBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7U0FDOUM7OztLQUNGLENBQUM7QUFiVyxRQUFBLFVBQVUsY0FhckIifQ==