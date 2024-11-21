"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateNodePlugin {
    constructor(checkNodeIsValid) {
        this.checkNodeIsValid = checkNodeIsValid;
    }
    onPathValidate(node, parent) {
        return this.checkNodeIsValid(node, parent);
    }
}
exports.default = ValidateNodePlugin;
