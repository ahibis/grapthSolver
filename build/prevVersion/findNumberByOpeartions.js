"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = require("./dfs");
console.log((0, dfs_1.dfs)([1], {
    getChildrens(data) {
        return [data * 2, data - 5];
    },
    isFinished(data) {
        return data == 343;
    },
    checkChildren(data) {
        return data > -100 && data <= 1000;
    },
    getHash(data) {
        return data.toString();
    },
    getScore(data, depth) {
        return -Math.abs(343 - data) - depth * 15;
    },
}).reverse());
