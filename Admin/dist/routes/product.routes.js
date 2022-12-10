"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_request_params_1 = require("../middleware/validate-request-params");
var validate_product_data_1 = __importDefault(require("../middleware/validate-product-data"));
var validate_patch_data_1 = __importDefault(require("../middleware/validate-patch-data"));
var product_controller_1 = require("../controllers/product.controller");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Service Running Fine",
        data: {},
        status: true,
        statusCode: 200,
    });
});
router
    .route("/api/v1/products")
    .get(product_controller_1.getProducts)
    .post(validate_product_data_1.default, product_controller_1.addProduct);
router
    .route("/api/v1/products/:id")
    .all(validate_request_params_1.validateRequestParams)
    .get(product_controller_1.getProduct)
    .put(validate_patch_data_1.default, product_controller_1.updateProduct)
    .delete(product_controller_1.deleteProduct);
router.patch("/api/v1/products/:id/like", validate_request_params_1.validateRequestParams, product_controller_1.likeProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9EO0FBQ3BELGlGQUE4RTtBQUM5RSw4RkFBc0U7QUFDdEUsMEZBQWtFO0FBQ2xFLHdFQU8yQztBQUUzQyxJQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxHQUFHO0tBQ2hCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTTtLQUNILEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztLQUN6QixHQUFHLENBQUMsZ0NBQVcsQ0FBQztLQUNoQixJQUFJLENBQUMsK0JBQW1CLEVBQUUsK0JBQVUsQ0FBQyxDQUFDO0FBQ3pDLE1BQU07S0FDSCxLQUFLLENBQUMsc0JBQXNCLENBQUM7S0FDN0IsR0FBRyxDQUFDLCtDQUFxQixDQUFDO0tBQzFCLEdBQUcsQ0FBQywrQkFBVSxDQUFDO0tBQ2YsR0FBRyxDQUFDLDZCQUFpQixFQUFFLGtDQUFhLENBQUM7S0FDckMsTUFBTSxDQUFDLGtDQUFhLENBQUMsQ0FBQztBQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLCtDQUFxQixFQUFFLGdDQUFXLENBQUMsQ0FBQztBQUU5RSxrQkFBZSxNQUFNLENBQUMifQ==