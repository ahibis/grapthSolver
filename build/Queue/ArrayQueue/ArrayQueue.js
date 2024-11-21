"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayQueue {
    constructor() {
        this._nodes = [];
    }
    push(node) {
        this._nodes.push(node);
    }
    pop() {
        return this._nodes.pop();
    }
    shift() {
        return this._nodes.shift();
    }
    get isEmpty() {
        return this._nodes.length === 0;
    }
    sort(compareFn) {
        this._nodes.sort(compareFn);
    }
    find(fn) {
        return this._nodes.find(fn);
    }
    filter(fn) {
        this._nodes = this._nodes.filter(fn);
    }
    getPrevNeighbor(node) {
        const index = this._nodes.indexOf(node);
        return this._nodes[index - 1];
    }
    getNextNeighbor(node) {
        const index = this._nodes.indexOf(node);
        return this._nodes[index + 1];
    }
    get nodes() {
        return this._nodes;
    }
}
exports.default = ArrayQueue;
