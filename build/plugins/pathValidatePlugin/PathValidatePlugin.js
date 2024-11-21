"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathValidatePlugin {
    constructor(graph, checkPathIsValid) {
        this.graph = graph;
        this.checkPathIsValid = checkPathIsValid;
    }
    onCheckStopCalculate(node) {
        return !this.checkPathIsValid(node, this.graph);
    }
}
exports.default = PathValidatePlugin;
