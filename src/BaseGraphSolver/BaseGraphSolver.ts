import { ArrayQueue, IQueue, LinkedNode, LinkedQueue } from "../Queue";
import GraphPlugin from "./plugins/GraphPlugin";
import Node from "./Node";
enum QueueType {
  arrayQueue,
  linkedQueue,
}
class BaseGraphSolver<T, TCtx> {
  private queueTypeToQueue = {
    [QueueType.arrayQueue]: () => new ArrayQueue<T>(),
    [QueueType.linkedQueue]: () => new LinkedQueue<T>(),
  };
  nodeQueue: IQueue<T>;
  private getChildrenByNode: (node: T) => T[];
  private plugins: GraphPlugin<T, TCtx>[] = [];
  results: Node<T, TCtx>[] = [];
  private getResultFnByPlugins<T1>(
    getFnByPlugin: (plugin: GraphPlugin<T, TCtx>) => T1,
    mergeFn: (fn: T1, prevFn: T1) => T1,
    defaultFn: T1
  ) {
    const plugins = this.plugins;
    let func: T1 | undefined;
    for (let pluginIndex = 0; pluginIndex < plugins.length; pluginIndex += 1) {
      const plugin = plugins[pluginIndex];
      const fnFromPlugin = getFnByPlugin(plugin);
      if (!fnFromPlugin) continue;
      if (!func) {
        func = fnFromPlugin;
        continue;
      }
      func = mergeFn(fnFromPlugin, func);
    }
    return func ? func : defaultFn;
  }
  private createNode(data: T): Node<T, TCtx> {
    return {
      data,
    };
  }
  private getTransformNodeFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onNodeTransform?.bind(plugin),
      (fn, prevFn) => (node, parent) => fn!(prevFn!(node, parent), parent),
      (node, parent) => node
    );
  }
  private getNodeValidateFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onNodeValidate?.bind(plugin),
      (fn, prevFn) => (node, parent) =>
        fn!(node, parent) && prevFn!(node, parent),
      undefined
    );
  }
  private getSettingFirstNodeFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onFirstNode?.bind(plugin),
      (fn, prevFn) => (node) => fn!(prevFn!(node)),
      (node) => node
    );
  }
  private getCheckIsResultFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onCheckIsResult?.bind(plugin),
      (fn, prevFn) => (node) => fn!(node) || prevFn!(node),
      (node) => false
    );
  }
  private getCheckStopCalculateFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onCheckStopCalculate?.bind(plugin),
      (fn, prevFn) => (node, graph) => fn!(node, graph) || prevFn!(node, graph),
      (node) => false
    );
  }
  private getAddNodeFn() {
    const validateFn = this.getNodeValidateFn();
    const transformFn = this.getTransformNodeFn();
    if (validateFn) {
      return (node: Node<T, TCtx>, prevNode: Node<T, TCtx>) => {
        const node1 = transformFn!(node, prevNode);
        if (validateFn(node1, prevNode)) {
          this.nodeQueue.push(node1);
        }
      };
    }
    return (node: Node<T, TCtx>, prevNode: Node<T, TCtx>) => {
      const node1 = transformFn!(node, prevNode);
      this.nodeQueue.push(node1);
    };
  }
  private getResultObserverFn() {
    const checkIsResultFn = this.getCheckIsResultFn();
    if (checkIsResultFn) {
      return (node: Node<T, TCtx>) => {
        if (checkIsResultFn(node)) {
          this.results.push(node);
        }
      };
    }
    return (node: Node<T, TCtx>) => {};
  }
  registerPlugin(plugin: GraphPlugin<T, TCtx>) {
    this.plugins.push(plugin);
  }
  constructor(
    getChildrenByNode: (node: T) => T[],
    queueType: QueueType = QueueType.arrayQueue
  ) {
    this.getChildrenByNode = getChildrenByNode;
    this.nodeQueue = this.queueTypeToQueue[queueType]();
  }
  calculateByNode(data: T) {
    this.plugins.sort(
      (plugin1, plugin2) => (plugin1.priority || 0) - (plugin2.priority || 0)
    );
    const createNode = this.createNode;
    const getChildrenByNode = this.getChildrenByNode;
    const configureFirstNode = this.getSettingFirstNodeFn()!;
    const transformNode = this.getTransformNodeFn()!;
    const addNode = this.getAddNodeFn();
    const resultObserver = this.getResultObserverFn();
    const checkStopCalculate = this.getCheckStopCalculateFn()!;

    this.results = [];
    let node: Node<T, TCtx> | undefined = configureFirstNode(createNode(data));
    resultObserver(node);
    if (checkStopCalculate(node, this)) {
      return [node];
    }
    while (node) {
      const children = getChildrenByNode(node.data);
      for (let i = 0; i < children.length; i += 1) {
        const child = transformNode(createNode(children[i]), node);
        resultObserver(child);
        if (checkStopCalculate(child, this)) {
          break;
        }
        addNode(child, node);
      }
      node = this.nodeQueue.pop() as Node<T, TCtx> | undefined;
    }
    return this.results;
  }
}
export { BaseGraphSolver, QueueType };
