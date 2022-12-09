"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var request_params_handler_1 = require("../middleware/request-params-handler");
var product_controller_1 = require("../controllers/product.controller");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Service Running Fine",
        status: true,
        statusCode: 200,
        data: [],
    });
});
router.route("/api/v1/products").get(product_controller_1.getProducts).post(product_controller_1.addProduct);
router
    .route("/api/v1/products/:id")
    .all(request_params_handler_1.validateRequestParams)
    .get(product_controller_1.getProduct)
    .put(product_controller_1.updateProduct)
    .delete(product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9EO0FBQ3BELCtFQUE2RTtBQUM3RSx3RUFNMkM7QUFFM0MsSUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsRUFBRTtLQUNULENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQ0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUFVLENBQUMsQ0FBQztBQUNuRSxNQUFNO0tBQ0gsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0tBQzdCLEdBQUcsQ0FBQyw4Q0FBcUIsQ0FBQztLQUMxQixHQUFHLENBQUMsK0JBQVUsQ0FBQztLQUNmLEdBQUcsQ0FBQyxrQ0FBYSxDQUFDO0tBQ2xCLE1BQU0sQ0FBQyxrQ0FBYSxDQUFDLENBQUM7QUFFekIsa0JBQWUsTUFBTSxDQUFDIn0=