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
var typeorm_1 = require("typeorm");
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
var PostgresDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_NAME,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE,
    entities: ["dist/entity/*.js"],
    logging: false,
    synchronize: true,
});
PostgresDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLG9EQUE4QjtBQUM5Qiw4Q0FBd0I7QUFDeEIsa0RBQTRCO0FBQzVCLG1DQUFxQztBQUVyQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTlELElBQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsQ0FBQztBQUNsQixHQUFHLENBQUMsR0FBRyxDQUNMLElBQUEsY0FBSSxFQUFDO0lBQ0gsTUFBTSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7Q0FDM0QsQ0FBQyxDQUNILENBQUM7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixJQUFNLGtCQUFrQixHQUFHLElBQUksb0JBQVUsQ0FBQztJQUN4QyxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFpQjtJQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQWlCO0lBQ3ZDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQXFCO0lBQzNDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQWtCO0lBQ3hDLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQzlCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsa0JBQWtCLENBQUMsVUFBVSxFQUFFO0tBQzVCLElBQUksQ0FBQztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQyxHQUFHO0lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUVMLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBcUIsSUFBSSxDQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQyJ9