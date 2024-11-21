"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathPlugin {
    constructor() {
        this.priority = -10000;
    }
    onPathTransform(node, parent) {
        node.parent = parent;
        return node;
    }
}
exports.default = PathPlugin;
