"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedQueue = exports.ArrayQueue = void 0;
var ArrayQueue_1 = require("./ArrayQueue/ArrayQueue");
Object.defineProperty(exports, "ArrayQueue", { enumerable: true, get: function () { return __importDefault(ArrayQueue_1).default; } });
var LinkedQueue_1 = require("./LinkedQueue/LinkedQueue");
Object.defineProperty(exports, "LinkedQueue", { enumerable: true, get: function () { return __importDefault(LinkedQueue_1).default; } });
