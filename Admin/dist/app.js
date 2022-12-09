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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var error_handler_1 = __importDefault(require("./middleware/error-handler"));
var db_1 = require("./database/db");
var product_routes_1 = __importDefault(require("./routes/product.routes"));
dotenv.config();
if (!process.env.PORT)
    process.exit(1);
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:4200"],
}));
app.use(express_1.default.json());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLG9EQUE4QjtBQUM5Qiw4Q0FBd0I7QUFDeEIsa0RBQTRCO0FBQzVCLDZFQUFzRDtBQUN0RCxvQ0FBbUQ7QUFDbkQsMkVBQTZDO0FBRTdDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV2QyxJQUFNLElBQUksR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFOUQsSUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBQSxjQUFJLEVBQUM7SUFDSCxNQUFNLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztDQUMzRCxDQUFDLENBQ0gsQ0FBQztBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQU0sQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxDQUFDO0FBRXRCLHVCQUFrQixDQUFDLFVBQVUsRUFBRTtLQUM1QixJQUFJLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztJQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFFTCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQXFCLElBQUksQ0FBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==