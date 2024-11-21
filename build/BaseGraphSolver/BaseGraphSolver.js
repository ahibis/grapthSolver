"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueType = exports.BaseGraphSolver = void 0;
const Queue_1 = require("../Queue");
var QueueType;
(function (QueueType) {
    QueueType[QueueType["arrayQueue"] = 0] = "arrayQueue";
    QueueType[QueueType["linkedQueue"] = 1] = "linkedQueue";
})(QueueType || (exports.QueueType = QueueType = {}));
class BaseGraphSolver {
    getResultFnByPlugins(getFnByPlugin, mergeFn, defaultFn) {
        const plugins = this.plugins;
        let func;
        for (let pluginIndex = 0; pluginIndex < plugins.length; pluginIndex += 1) {
            const plugin = plugins[pluginIndex];
            const fnFromPlugin = getFnByPlugin(plugin);
            if (!fnFromPlugin)
                continue;
            if (!func) {
                func = fnFromPlugin;
                continue;
            }
            func = mergeFn(fnFromPlugin, func);
        }
        return func ? func : defaultFn;
    }
    createPath(data) {
        return {
            data,
        };
    }
    getTransformPathFn() {
        return this.getResultFnByPlugins((plugin) => { var _a; return (_a = plugin.onPathTransform) === null || _a === void 0 ? void 0 : _a.bind(plugin); }, (fn, prevFn) => (node, parent) => fn(prevFn(node, parent), parent), (node, parent) => node);
    }
    getValidatePathFn() {
        return this.getResultFnByPlugins((plugin) => { var _a; return (_a = plugin.onPathValidate) === null || _a === void 0 ? void 0 : _a.bind(plugin); }, (fn, prevFn) => (node, parent) => prevFn(node, parent) && fn(node, parent), undefined);
    }
    getSettingFirstPathFn() {
        return this.getResultFnByPlugins((plugin) => { var _a; return (_a = plugin.onFirstPath) === null || _a === void 0 ? void 0 : _a.bind(plugin); }, (fn, prevFn) => (node) => fn(prevFn(node)), (node) => node);
    }
    getCheckIsResultFn() {
        return this.getResultFnByPlugins((plugin) => { var _a; return (_a = plugin.onCheckIsResult) === null || _a === void 0 ? void 0 : _a.bind(plugin); }, (fn, prevFn) => (node) => fn(node) || prevFn(node), (node) => false);
    }
    getCheckStopCalculateFn() {
        return this.getResultFnByPlugins((plugin) => { var _a; return (_a = plugin.onCheckStopCalculate) === null || _a === void 0 ? void 0 : _a.bind(plugin); }, (fn, prevFn) => (node) => fn(node) || prevFn(node), (node) => false);
    }
    getAddNodeFn() {
        const validateFn = this.getValidatePathFn();
        const transformFn = this.getTransformPathFn();
        if (validateFn) {
            return (node, prevNode) => {
                const node1 = transformFn(node, prevNode);
                if (validateFn(node1, prevNode)) {
                    this.orderOfPathPass.push(node1);
                }
            };
        }
        return (node, prevNode) => {
            const node1 = transformFn(node, prevNode);
            this.orderOfPathPass.push(node1);
        };
    }
    getResultObserverFn() {
        const checkIsResultFn = this.getCheckIsResultFn();
        if (checkIsResultFn) {
            return (node) => {
                if (checkIsResultFn(node)) {
                    this.results.push(node);
                }
            };
        }
        return (node) => { };
    }
    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }
    constructor(getChildrenByNode, queueType = QueueType.arrayQueue) {
        this.queueTypeToQueue = {
            [QueueType.arrayQueue]: () => new Queue_1.ArrayQueue(),
            [QueueType.linkedQueue]: () => new Queue_1.LinkedQueue(),
        };
        this.plugins = [];
        this.results = [];
        this.getChildrenByNode = getChildrenByNode;
        this.orderOfPathPass = this.queueTypeToQueue[queueType]();
    }
    getResultsData() {
        return this.results.map((node) => node.data);
    }
    getResultsPathData() {
        return this.results.map((node) => node.pathData);
    }
    calculateByNode(data) {
        this.plugins.sort((plugin1, plugin2) => (plugin1.priority || 0) - (plugin2.priority || 0));
        const createPath = this.createPath;
        const getChildrenByNode = this.getChildrenByNode;
        const configureFirstNode = this.getSettingFirstPathFn();
        const transformNode = this.getTransformPathFn();
        const addNode = this.getAddNodeFn();
        const resultObserver = this.getResultObserverFn();
        const checkStopCalculate = this.getCheckStopCalculateFn();
        this.results = [];
        let node = configureFirstNode(createPath(data));
        resultObserver(node);
        if (checkStopCalculate(node)) {
            return [node];
        }
        while (node) {
            const children = getChildrenByNode(node.data);
            for (let i = 0; i < children.length; i += 1) {
                const child = transformNode(createPath(children[i]), node);
                resultObserver(child);
                if (checkStopCalculate(child)) {
                    break;
                }
                addNode(child, node);
            }
            node = this.orderOfPathPass.pop();
        }
        return this.results;
    }
}
exports.BaseGraphSolver = BaseGraphSolver;
