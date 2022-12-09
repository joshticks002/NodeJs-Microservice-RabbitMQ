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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.PostgresDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBcUM7QUFDckMsNkNBQWlDO0FBRWpDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVILFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxvQkFBVSxDQUFDO0lBQy9DLElBQUksRUFBRSxVQUFVO0lBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQWlCO0lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBaUI7SUFDdkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBcUI7SUFDM0MsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBa0I7SUFDeEMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDOUIsT0FBTyxFQUFFLEtBQUs7SUFDZCxXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDLENBQUMifQ==