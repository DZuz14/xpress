"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var testRouter = (0, express_1.Router)();
testRouter.get('/', function (req, res) {
    res.json({ hello: 'world' });
});
exports.default = testRouter;
