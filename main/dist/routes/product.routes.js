"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_request_params_1 = require("../middleware/validate-request-params");
var product_controller_1 = require("../controllers/product.controller");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Main Service Running Fine",
        data: {},
        status: true,
        statusCode: 200,
    });
});
router.route("/api/v1/products").get(product_controller_1.getProducts);
router.patch("/api/v1/products/:id/like", validate_request_params_1.validateRequestParams, product_controller_1.likeProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9EO0FBQ3BELGlGQUE4RTtBQUM5RSx3RUFBNkU7QUFFN0UsSUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsR0FBRztLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0NBQVcsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsK0NBQXFCLEVBQUUsZ0NBQVcsQ0FBQyxDQUFDO0FBRTlFLGtCQUFlLE1BQU0sQ0FBQyJ9