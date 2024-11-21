"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResultPlugin {
    constructor(checkNodeIsResult) {
        this.checkNodeIsResult = checkNodeIsResult;
    }
    onCheckIsResult(node) {
        return this.checkNodeIsResult(node);
    }
}
exports.default = ResultPlugin;
