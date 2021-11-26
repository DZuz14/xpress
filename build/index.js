"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var example_1 = __importDefault(require("./routes/example"));
mongoose_1.default.connect('mongodb://localhost/<changeme>');
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/example', example_1.default);
var port = process.env.PORT || 3090;
var server = http_1.default.createServer(app);
server.listen(port);
console.log('Server has been started, and is listening on port: ' + port);
