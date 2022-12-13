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
var amqp = __importStar(require("amqplib/callback_api"));
var channelConnect;
var connectChannel = function () {
    amqp.connect("amqps://dvxdcsef:B5HJBCOEjcxudBbNhXvQ1fhAGobT31cN@hawk.rmq.cloudamqp.com/dvxdcsef", function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            channelConnect = channel;
            channelConnect.assertQueue("hello", { durable: false });
            channelConnect.consume("hello", function (msg) {
                console.log(msg.content.toString());
            });
            console.log("RabbitMQ channel connected successfully");
        });
    });
};
module.exports = {
    connectChannel: connectChannel,
};
exports.default = channelConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1xcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25uZWN0aW9ucy9hbXFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBNkM7QUFFN0MsSUFBSSxjQUE0QixDQUFDO0FBRWpDLElBQU0sY0FBYyxHQUFHO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQ1YsbUZBQW1GLEVBQ25GLFVBQUMsTUFBTSxFQUFFLFVBQVU7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLE1BQU0sQ0FBQztTQUNkO1FBRUQsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFDLE1BQU0sRUFBRSxPQUFPO1lBQ3ZDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sTUFBTSxDQUFDO2FBQ2Q7WUFDRCxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQ3pCLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFeEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFpQjtnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixjQUFjLGdCQUFBO0NBQ2YsQ0FBQztBQUNGLGtCQUFlLGNBQThCLENBQUMifQ==