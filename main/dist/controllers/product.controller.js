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
exports.likeProduct = exports.getProducts = void 0;
var not_found_1 = __importDefault(require("../errors/not-found"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var Product = require("../models/product");
var amqp = require("amqplib");
require("dotenv").config();
var channel, connection;
var connect = function () { return __awaiter(void 0, void 0, void 0, function () {
    var amqpServer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                amqpServer = process.env.AMQP_SERVER;
                return [4 /*yield*/, amqp.connect(amqpServer)];
            case 1:
                connection = _a.sent();
                return [4 /*yield*/, connection.createChannel()];
            case 2:
                channel = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
connect();
exports.getProducts = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product.find()];
            case 1:
                products = _a.sent();
                res.status(200).json({
                    message: "Retrieved all products",
                    data: {
                        products: products,
                    },
                    status: true,
                    statusCode: 200,
                });
                return [2 /*return*/];
        }
    });
}); });
exports.likeProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, isValidProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Product.findOne({ _id: id })];
            case 1:
                isValidProduct = _a.sent();
                if (!isValidProduct) {
                    throw new not_found_1.default("Product not found");
                }
                isValidProduct.likes++;
                return [4 /*yield*/, Product.updateOne({ _id: id }, {
                        likes: isValidProduct.likes,
                    })];
            case 2:
                _a.sent();
                channel.sendToQueue("PRODUCT_UPDATE", Buffer.from(JSON.stringify(isValidProduct)));
                res.status(200).json({
                    message: "Product updated successfully",
                    data: {},
                    status: true,
                    statusCode: 200,
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Byb2R1Y3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBZ0Q7QUFDaEQsZ0ZBQXdEO0FBS3hELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsSUFBSSxPQUFPLEVBQUUsVUFBVSxDQUFDO0FBRXhCLElBQU0sT0FBTyxHQUFHOzs7OztnQkFDUixVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUE7O2dCQUEzQyxVQUFVLEdBQUcsU0FBOEIsQ0FBQztnQkFDbEMscUJBQU0sVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFBOztnQkFBMUMsT0FBTyxHQUFHLFNBQWdDLENBQUM7Ozs7S0FDNUMsQ0FBQztBQUNGLE9BQU8sRUFBRSxDQUFDO0FBRUcsUUFBQSxXQUFXLEdBQUcsSUFBQSwrQkFBbUIsRUFDNUMsVUFBTyxHQUFZLEVBQUUsR0FBYTs7OztvQkFDSCxxQkFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUEzQyxRQUFRLEdBQWUsU0FBb0I7Z0JBRWpELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osUUFBUSxVQUFBO3FCQUNUO29CQUNELE1BQU0sRUFBRSxJQUFJO29CQUNaLFVBQVUsRUFBRSxHQUFHO2lCQUNoQixDQUFDLENBQUM7Ozs7S0FDSixDQUNGLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxJQUFBLCtCQUFtQixFQUM1QyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDeEIsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBQ0gscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBbkQsY0FBYyxHQUFHLFNBQWtDO2dCQUV6RCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixNQUFNLElBQUksbUJBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXZCLHFCQUFNLE9BQU8sQ0FBQyxTQUFTLENBQ3JCLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUNYO3dCQUNFLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSztxQkFDNUIsQ0FDRixFQUFBOztnQkFMRCxTQUtDLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLFdBQVcsQ0FDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUM1QyxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixPQUFPLEVBQUUsOEJBQThCO29CQUN2QyxJQUFJLEVBQUUsRUFBRTtvQkFDUixNQUFNLEVBQUUsSUFBSTtvQkFDWixVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDOzs7O0tBQ0osQ0FDRixDQUFDIn0=