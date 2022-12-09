"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
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
router.get("/products", product_controller_1.getProducts);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9EO0FBQ3BELHdFQUFnRTtBQUVoRSxJQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxFQUFFO0tBQ1QsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQ0FBVyxDQUFDLENBQUM7QUFFckMsa0JBQWUsTUFBTSxDQUFDIn0=