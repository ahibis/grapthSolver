"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathDataPlugin {
    constructor(initDataPath, getPathDataForNewNode) {
        this.initDataPath = initDataPath;
        this.getPathDataForNewNode = getPathDataForNewNode;
        this.priority = -10000;
    }
    onFirstPath(path) {
        path.pathData = this.initDataPath(path);
        return path;
    }
    onPathTransform(path, parent) {
        path.pathData = this.getPathDataForNewNode(path, parent);
        return path;
    }
}
exports.default = PathDataPlugin;
