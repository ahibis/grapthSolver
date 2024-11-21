"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LimitOfCountResults {
    constructor(graph, limitOfCount = 1) {
        this.graph = graph;
        this.limitOfCount = limitOfCount;
    }
    onCheckStopCalculate(node) {
        return this.graph.results.length >= this.limitOfCount;
    }
}
exports.default = LimitOfCountResults;
