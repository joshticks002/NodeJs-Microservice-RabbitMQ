"use strict";
/**
 * @description recieves a number argument to yield a offset and limit
 * @param {Number} page_no query params
 * @return {Object} { startIndex, endIndex }
 */
Object.defineProperty(exports, "__esModule", { value: true });
var listRange = function (page_no) {
    var page = Number(page_no);
    var limit = 10;
    var startIndex = (page - 1) * limit;
    var endIndex = page * limit;
    return {
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = listRange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9wYWdpbmF0ZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILElBQU0sU0FBUyxHQUFHLFVBQ2hCLE9BQWU7SUFFZixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLElBQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0QyxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRTlCLE9BQU87UUFDTCxVQUFVLFlBQUE7UUFDVixRQUFRLFVBQUE7S0FDVCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=