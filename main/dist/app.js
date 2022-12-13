"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var error_handler_1 = __importDefault(require("./middleware/error-handler"));
var connectDB = require("./connections/db").connectDB;
var amqp = __importStar(require("amqplib"));
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var Product = require("./models/product");
var channel, connection;
connectDB();
dotenv.config();
if (!process.env.PORT)
    process.exit(1);
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
var connect = function () { return __awaiter(void 0, void 0, void 0, function () {
    var options, amqpServer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    durable: false,
                    autoDelete: true,
                };
                amqpServer = process.env.AMQP_SERVER;
                return [4 /*yield*/, amqp.connect(amqpServer)];
            case 1:
                connection = _a.sent();
                return [4 /*yield*/, connection.createChannel()];
            case 2:
                channel = _a.sent();
                return [4 /*yield*/, channel.assertQueue("PRODUCT_CREATED", options)];
            case 3:
                _a.sent();
                return [4 /*yield*/, channel.assertQueue("PRODUCT_UPDATED", options)];
            case 4:
                _a.sent();
                return [4 /*yield*/, channel.assertQueue("PRODUCT_DELETED", options)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:4200"],
}));
app.use(express_1.default.json());
connect().then(function () {
    channel.consume("PRODUCT_CREATED", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var data, product, prd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = JSON.parse(msg.content);
                    product = {
                        admin_id: Number(data.id),
                        title: data.title,
                        image: data.image,
                        likes: data.likes,
                    };
                    return [4 /*yield*/, Product.create(product)];
                case 1:
                    prd = _a.sent();
                    console.log("successfully created");
                    return [2 /*return*/];
            }
        });
    }); }, { noAck: true });
    channel.consume("PRODUCT_UPDATED", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var data, product, upPrd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = JSON.parse(msg.content);
                    product = {
                        admin_id: Number(data.id),
                        title: data.title,
                        image: data.image,
                        likes: data.likes,
                    };
                    return [4 /*yield*/, Product.updateOne({ admin_id: product.admin_id }, product)];
                case 1:
                    upPrd = _a.sent();
                    console.log("successfully updated");
                    return [2 /*return*/];
            }
        });
    }); }, { noAck: true });
    channel.consume("PRODUCT_DELETED", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Product.findOneAndRemove({
                        admin_id: parseInt(msg.content.toString()),
                    })];
                case 1:
                    _a.sent();
                    console.log("successfully deleted");
                    return [2 /*return*/];
            }
        });
    }); }, { noAck: true });
});
app.use(product_routes_1.default);
app.use(error_handler_1.default);
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLG9EQUE4QjtBQUM5Qiw4Q0FBd0I7QUFDeEIsa0RBQTRCO0FBQzVCLDZFQUFzRDtBQUM5QyxJQUFBLFNBQVMsR0FBSyxPQUFPLENBQUMsa0JBQWtCLENBQUMsVUFBaEMsQ0FBaUM7QUFDbEQsNENBQWdDO0FBRWhDLDJFQUE2QztBQUM3QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QyxJQUFJLE9BQU8sRUFBRSxVQUFVLENBQUM7QUFFeEIsU0FBUyxFQUFFLENBQUM7QUFDWixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTlELElBQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLElBQU0sT0FBTyxHQUFHOzs7OztnQkFDUixPQUFPLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7Z0JBQ0ksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUM5QixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFBOztnQkFBM0MsVUFBVSxHQUFHLFNBQThCLENBQUM7Z0JBQ2xDLHFCQUFNLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQTs7Z0JBQTFDLE9B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