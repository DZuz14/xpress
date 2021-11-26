"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ExampleController_1 = __importDefault(require("../controllers/ExampleController"));
var router = (0, express_1.Router)();
router.get('/', ExampleController_1.default.getExample);
exports.default = router;
