"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
var app_1 = require("../app");
var product_1 = require("../entity/product");
var UserResolver = /** @class */ (function () {
    function UserResolver() {
        this.productRepo = app_1.PostgresDataSource.getRepository(product_1.Product);
    }
    return UserResolver;
}());
exports.UserResolver = UserResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvcHJvZHVjdC5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFBNEM7QUFDNUMsNkNBQTRDO0FBRTVDO0lBQUE7UUFDRSxnQkFBVyxHQUFHLHdCQUFrQixDQUFDLGFBQWEsQ0FBQyxpQkFBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxvQ0FBWSJ9