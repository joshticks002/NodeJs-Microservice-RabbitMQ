"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.likeProduct = exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.addProduct = exports.getProducts = void 0;
var product_service_1 = require("../services/product.service");
var not_found_1 = __importDefault(require("../errors/not-found"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var paginate_data_1 = __importDefault(require("../utils/paginate-data"));
var typeorm_1 = require("typeorm");
var bad_request_1 = __importDefault(require("../errors/bad-request"));
var amqp = require("amqplib");
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
var _a = new product_service_1.ProductService(), findBy = _a.findBy, getCount = _a.getCount, findOneBy = _a.findOneBy, remove = _a.remove, create = _a.create, update = _a.update, save = _a.save;
exports.getProducts = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, startIndex, endIndex, _b, products, productsCount;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                query = {};
                if (req.query.title) {
                    query.where = {
                        title: (0, typeorm_1.Like)("%".concat(req.query.title, "%")),
                    };
                }
                if (req.query.page) {
                    _a = (0, paginate_data_1.default)(Number(req.query.page)), startIndex = _a.startIndex, endIndex = _a.endIndex;
                    query.page = req.query.page;
                    query.skip = startIndex;
                    query.take = endIndex;
                }
                return [4 /*yield*/, Promise.all([
                        findBy(__assign({}, query)),
                        getCount(),
                    ])];
            case 1:
                _b = _c.sent(), products = _b[0], productsCount = _b[1];
                res.status(200).json({
                    message: "Retrieved all products",
                    data: {
                        total: productsCount,
                        page: query.page ? Number(query.page) : 1,
                        per_page: 10,
                        total_pages: productsCount > 10 ? productsCount / 10 : 1,
                        products: products,
                    },
                    status: true,
                    statusCode: 200,
                });
                return [2 /*return*/];
        }
    });
}); });
exports.addProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, isValidProduct, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = req.body.title;
                return [4 /*yield*/, findOneBy({ title: title })];
            case 1:
                isValidProduct = (_a.sent()) || null;
                if (isValidProduct) {
                    throw new bad_request_1.default("Product already exist");
                }
                return [4 /*yield*/, create(req.body)];
            case 2:
                product = _a.sent();
                channel.sendToQueue("PRODUCT_CREATED", Buffer.from(JSON.stringify(product)));
                res.status(201).json({
                    message: "Product added successfully",
                    data: {},
                    status: true,
                    statusCode: 201,
                });
                return [2 /*return*/];
        }
    });
}); });
exports.getProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, findOneBy({ id: req.params.id })];
            case 1:
                product = (_a.sent()) || null;
                if (!product) {
                    throw new not_found_1.default("Product not found");
                }
                res.status(200).json({
                    message: "Product retrieved successfully",
                    data: {
                        product: product,
                    },
                    status: true,
                    statusCode: 200,
                });
                return [2 /*return*/];
        }
    });
}); });
exports.updateProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isValidProduct, product, updatedProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, findOneBy({ id: req.params.id })];
            case 1:
                isValidProduct = _a.sent();
                if (!!isValidProduct) return [3 /*break*/, 3];
                return [4 /*yield*/, create(req.body)];
            case 2:
                product = _a.sent();
                channel.sendToQueue("PRODUCT_CREATED", Buffer.from(JSON.stringify(product)));
                res.status(201).json({
                    message: "Product added successfully",
                    data: {},
                    status: true,
                    statusCode: 201,
                });
                return [2 /*return*/];
            case 3: return [4 /*yield*/, update(isValidProduct, req.body)];
            case 4:
                updatedProduct = _a.sent();
                channel.sendToQueue("PRODUCT_UPDATED", Buffer.from(JSON.stringify(updatedProduct)));
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
exports.deleteProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, isValidProduct, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, findOneBy({ id: id })];
            case 1:
                isValidProduct = _a.sent();
                if (!isValidProduct) {
                    throw new not_found_1.default("Product not found");
                }
                return [4 /*yield*/, remove(Number(id))];
            case 2:
                product = _a.sent();
                channel.sendToQueue("PRODUCT_DELETED", Buffer.from(id));
                res.status(204).json({
                    message: "Product successfully removed",
                    data: {},
                    status: true,
                    statusCode: 204,
                });
                return [2 /*return*/];
        }
    });
}); });
exports.likeProduct = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isValidProduct, updatedProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, findOneBy({ id: req.params.id })];
            case 1:
                isValidProduct = _a.sent();
                if (!isValidProduct) {
                    throw new not_found_1.default("Product not found");
                }
                isValidProduct.likes++;
                return [4 /*yield*/, save(isValidProduct)];
            case 2:
                updatedProduct = _a.sent();
                channel.sendToQueue("PRODUCT_UPDATED", Buffer.from(JSON.stringify(isValidProduct)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Byb2R1Y3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE2RDtBQUM3RCxrRUFBZ0Q7QUFDaEQsZ0ZBQXdEO0FBRXhELHlFQUErQztBQUMvQyxtQ0FBK0I7QUFFL0Isc0VBQW9EO0FBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVoQyxJQUFJLE9BQU8sRUFBRSxVQUFVLENBQUM7QUFFeEIsSUFBTSxPQUFPLEdBQUc7Ozs7O2dCQUNSLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDOUIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBQTs7Z0JBQTNDLFVBQVUsR0FBRyxTQUE4QixDQUFDO2dCQUNsQyxxQkFBTSxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUE7O2dCQUExQyxPQUFPLEdBQUcsU0FBZ0MsQ0FBQzs7OztLQUM1QyxDQUFDO0FBQ0YsT0FBTyxFQUFFLENBQUM7QUFFSixJQUFBLEtBQ0osSUFBSSxnQ0FBYyxFQUFFLEVBRGQsTUFBTSxZQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsSUFBSSxVQUMzQyxDQUFDO0FBRVYsUUFBQSxXQUFXLEdBQUcsSUFBQSwrQkFBbUIsRUFDNUMsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7Z0JBQzVCLEtBQUssR0FBd0IsRUFBRSxDQUFDO2dCQUVwQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUNuQixLQUFLLENBQUMsS0FBSyxHQUFHO3dC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