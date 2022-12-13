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
var amqp = __importStar(require("amqplib"));
var error_handler_1 = __importDefault(require("./middleware/error-handler"));
var db_1 = require("./database/db");
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var product_service_1 = require("./services/product.service");
var _a = new product_service_1.ProductService(), update = _a.update, findOneBy = _a.findOneBy;
dotenv.config();
var channel, connection;
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
                return [4 /*yield*/, channel.assertQueue("PRODUCT_UPDATE", options)];
            case 3:
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
    channel.consume("PRODUCT_UPDATE", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var data, isValidProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = JSON.parse(msg.content);
                    return [4 /*yield*/, findOneBy({ id: parseInt(data.admin_id) })];
                case 1:
                    isValidProduct = _a.sent();
                    return [4 /*yield*/, update(isValidProduct, { likes: data.likes })];
                case 2:
                    _a.sent();
                    console.log("successfully updated");
                    return [2 /*return*/];
            }
        });
    }); }, { noAck: true });
});
app.use(product_routes_1.default);
app.use(error_handler_1.default);
db_1.PostgresDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLG9EQUE4QjtBQUM5Qiw4Q0FBd0I7QUFDeEIsa0RBQTRCO0FBQzVCLDRDQUFnQztBQUNoQyw2RUFBc0Q7QUFDdEQsb0NBQW1EO0FBQ25ELDJFQUE2QztBQUM3Qyw4REFBNEQ7QUFDdEQsSUFBQSxLQUF3QixJQUFJLGdDQUFjLEVBQUUsRUFBMUMsTUFBTSxZQUFBLEVBQUUsU0FBUyxlQUF5QixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixJQUFJLE9BQU8sRUFBRSxVQUFVLENBQUM7QUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTlELElBQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLElBQU0sT0FBTyxHQUFHOzs7OztnQkFDUixPQUFPLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7Z0JBQ0ksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUM5QixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFBOztnQkFBM0MsVUFBVSxHQUFHLFNBQThCLENBQUM7Z0JBQ2xDLHFCQUFNLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQTs7Z0JBQTFDLE9BQU8sR0FBRyxTQUFnQyxDQUFDO2dCQUMzQyxxQkFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxFQUFBOztnQkFBcEQsU0FBb0QsQ0FBQzs7OztLQUN0RCxDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBQSxjQUFJLEVBQUM7SUFDSCxNQUFNLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztDQUMzRCxDQUFDLENBQ0gsQ0FBQztBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLE9BQU8sQ0FBQyxPQUFPLENBQ2IsZ0JBQWdCLEVBQ2hCLFVBQU8sR0FBdUM7Ozs7O29CQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2QscUJBQU0sU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQkFBakUsY0FBYyxHQUFHLFNBQWdEO29CQUV2RSxxQkFBTSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBOztvQkFBbkQsU0FBbUQsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzs7O1NBQ3JDLEVBQ0QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQ2hCLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQU0sQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxDQUFDO0FBRXRCLHVCQUFrQixDQUFDLFVBQVUsRUFBRTtLQUM1QixJQUFJLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztJQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFFTCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQXFCLElBQUksQ0FBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==