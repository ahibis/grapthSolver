import { ArrayQueue, IQueue, LinkedQueue } from "../Queue";
import GraphPlugin from "../plugins/GraphPlugin";
import Path from "./Path";
enum QueueType {
  arrayQueue,
  linkedQueue,
}
class BaseGraphSolver<T, TCtx=unknown, TNodeCtx=unknown> {
  private queueTypeToQueue = {
    [QueueType.arrayQueue]: () => new ArrayQueue<T>(),
    [QueueType.linkedQueue]: () => new LinkedQueue<T>(),
  };
  nodeQueue: IQueue<T>;
  private getChildrenByNode: (node: T) => T[];
  private plugins: GraphPlugin<T, TCtx, TNodeCtx>[] = [];
  results: Path<T, TCtx, TNodeCtx>[] = [];
  private getResultFnByPlugins<T1>(
    getFnByPlugin: (plugin: GraphPlugin<T, TCtx, TNodeCtx>) => T1,
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
  private createPath(data: T): Path<T, TCtx, TNodeCtx> {
    return {
      data,
    };
  }
  private getTransformPathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onPathTransform?.bind(plugin),
      (fn, prevFn) => (node, parent) => fn!(prevFn!(node, parent), parent),
      (node, parent) => node
    );
  }
  private getValidatePathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onPathValidate?.bind(plugin),
      (fn, prevFn) => (node, parent) =>
      prevFn!(node, parent) && fn!(node, parent),
      undefined
    );
  }
  private getSettingFirstPathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onFirstPath?.bind(plugin),
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
    const validateFn = this.getValidatePathFn();
    const transformFn = this.getTransformPathFn();
    if (validateFn) {
      return (node: Path<T, TCtx, TNodeCtx>, prevNode: Path<T, TCtx, TNodeCtx>) => {
        const node1 = transformFn!(node, prevNode);
        if (validateFn(node1, prevNode)) {
          this.nodeQueue.push(node1);
        }
      };
    }
    return (node: Path<T, TCtx, TNodeCtx>, prevNode: Path<T, TCtx, TNodeCtx>) => {
      const node1 = transformFn!(node, prevNode);
      this.nodeQueue.push(node1);
    };
  }
  private getResultObserverFn() {
    const checkIsResultFn = this.getCheckIsResultFn();
    if (checkIsResultFn) {
      return (node: Path<T, TCtx, TNodeCtx>) => {
        if (checkIsResultFn(node)) {
          this.results.push(node);
        }
      };
    }
    return (node: Path<T, TCtx, TNodeCtx>) => {};
  }
  registerPlugin(plugin: GraphPlugin<T, TCtx, TNodeCtx>) {
    this.plugins.push(plugin);
  }
  constructor(
    getChildrenByNode: (node: T) => T[],
    queueType: QueueType = QueueType.arrayQueue
  ) {
    this.getChildrenByNode = getChildrenByNode;
    this.nodeQueue = this.queueTypeToQueue[queueType]();
  }
  getResultsData(){
    return this.results.map((node) => node.data);
  }
  calculateByNode(data: T){
    this.plugins.sort(
      (plugin1, plugin2) => (plugin1.priority || 0) - (plugin2.priority || 0)
    );
    const createPath = this.createPath;
    const getChildrenByNode = this.getChildrenByNode;
    const configureFirstNode = this.getSettingFirstPathFn()!;
    const transformNode = this.getTransformPathFn()!;
    const addNode = this.getAddNodeFn();
    const resultObserver = this.getResultObserverFn();
    const checkStopCalculate = this.getCheckStopCalculateFn()!;

    this.results = [];
    let node: Path<T, TCtx, TNodeCtx> | undefined = configureFirstNode(createPath(data));
    resultObserver(node!);
    if (checkStopCalculate(node!, this)) {
      return [node!];
    }
    while (node) {
      const children = getChildrenByNode(node.data);
      for (let i = 0; i < children.length; i += 1) {
        const child = transformNode(createPath(children[i]), node);
        resultObserver(child);
        if (checkStopCalculate(child, this)) {
          break;
        }
        addNode(child, node);
      }
      node = this.nodeQueue.pop() as Path<T, TCtx, TNodeCtx> | undefined;
    }
    return this.results;
  }
}
export { BaseGraphSolver, QueueType };
