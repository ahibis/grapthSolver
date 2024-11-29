import { ArrayQueue, LinkedQueue } from '../queue'
import ILinkedQueue from '../queue/ILinkedQueue'
import GraphPlugin from '../plugins/GraphPlugin'
import Path from './Path'
enum QueueType {
  arrayQueue,
  linkedQueue,
}
/**
 * Class for manipulating graphs without a declarative style
 *
 * @class BaseGraphSolver
 * @template TNode
 * @template TPathData
 * @template TNodeData
 * @template TPath
 * @template TGraphPlugin
 */
class BaseGraphSolver<
  TNode,
  TPathData = unknown,
  TNodeData = unknown,
  TPath extends Path<TNode, TPathData, TNodeData> = Path<
    TNode,
    TPathData,
    TNodeData
  >,
  TGraphPlugin extends GraphPlugin<
    TNode,
    TPathData,
    TNodeData,
    TPath
  > = GraphPlugin<TNode, TPathData, TNodeData, TPath>,
> {
  private queueTypeToQueue = {
    [QueueType.arrayQueue]: () => new ArrayQueue<TPath>(),
    [QueueType.linkedQueue]: () => new LinkedQueue<TNode, TPath>(),
  }
  private orderPathsToProcess: ILinkedQueue<TNode, TPath>
  private getChildrenByNode: (node: TNode) => TNode[]
  private plugins: TGraphPlugin[] = []
  resultPaths: TPath[] = []

  private mergeFuncsByPlugins<T1>(
    getFnByPlugin: (plugin: TGraphPlugin) => T1,
    mergeFn: (fn: T1, prevFn: T1) => T1,
    defaultFn: T1
  ) {
    const plugins = this.plugins
    let func: T1 | undefined
    for (let pluginIndex = 0; pluginIndex < plugins.length; pluginIndex += 1) {
      const plugin = plugins[pluginIndex]
      const fnFromPlugin = getFnByPlugin(plugin)
      if (!fnFromPlugin) {
        continue
      }
      if (!func) {
        func = fnFromPlugin
        continue
      }
      func = mergeFn(fnFromPlugin, func)
    }
    return func ? func : defaultFn
  }
  private createPath(data: TNode): TPath {
    return {
      node: data,
    } as TPath
  }
  private getTransformPathFn() {
    return this.mergeFuncsByPlugins(
      (plugin) => plugin.onPathTransform?.bind(plugin),
      (fn, prevFn) => (node, parent) => fn!(prevFn!(node, parent), parent),
      (node) => node
    )
  }
  private getValidatePathFn() {
    return this.mergeFuncsByPlugins(
      (plugin) => plugin.onPathValidate?.bind(plugin),
      (fn, prevFn) => (node, parent) =>
        prevFn!(node, parent) && fn!(node, parent),
      undefined
    )
  }
  private getSettingFirstPathFn() {
    return this.mergeFuncsByPlugins(
      (plugin) => plugin.onFirstPath?.bind(plugin),
      (fn, prevFn) => (node) => fn!(prevFn!(node)),
      (node) => node
    )
  }
  private getCheckIsResultFn() {
    return this.mergeFuncsByPlugins(
      (plugin) => plugin.onCheckIsResult?.bind(plugin),
      (fn, prevFn) => (node) => fn!(node) || prevFn!(node),
      () => false
    )
  }
  private getCheckStopCalculateFn() {
    return this.mergeFuncsByPlugins(
      (plugin) => plugin.onCheckStopCalculate?.bind(plugin),
      (fn, prevFn) => (node) => fn!(node) || prevFn!(node),
      () => false
    )
  }
  private getAddNodeFn() {
    const validateFn = this.getValidatePathFn()
    const transformFn = this.getTransformPathFn()
    if (validateFn) {
      return (node: TPath, prevNode: TPath) => {
        const node1 = transformFn!(node, prevNode)
        if (validateFn(node1, prevNode)) {
          this.orderPathsToProcess.push(node1)
        }
      }
    }
    return (node: TPath, prevNode: TPath) => {
      const node1 = transformFn!(node, prevNode)
      this.orderPathsToProcess.push(node1)
    }
  }

  private getResultObserverFn() {
    const checkIsResultFn = this.getCheckIsResultFn()
    if (checkIsResultFn) {
      return (node: TPath) => {
        if (checkIsResultFn(node)) {
          this.resultPaths.push(node)
        }
      }
    }
    return () => {}
  }

  /**
   * Registers a plugin to the graph solver.
   *
   * @param plugin - The plugin to be registered, which should implement
   * the TGraphPlugin interface. This plugin will be added to the list
   * of plugins used by the solver to modify or enhance its behavior.
   */
  registerPlugin(plugin: TGraphPlugin) {
    this.plugins.push(plugin)
  }
  /**
   * Creates an instance of BaseGraphSolver.
   *
   * @param getChildrenByNode - A function that takes a node and returns an array of its children.
   * @param queueType - The type of queue to use for processing paths. Defaults to QueueType.arrayQueue.
   */
  constructor(
    getChildrenByNode: (node: TNode) => TNode[],
    queueType: QueueType = QueueType.arrayQueue
  ) {
    this.getChildrenByNode = getChildrenByNode
    this.orderPathsToProcess = this.queueTypeToQueue[queueType]()
  }
  /**
   * Returns the data from all the nodes in the result paths.
   *
   * @returns An array of node data, where each element is the data from a node
   * in one of the result paths.
   */
  getResultsData() {
    return this.resultPaths.map((node) => node.node)
  }
  /**
   * Retrieves the path data from all result paths.
   *
   * @returns An array where each element is the path data associated
   * with a node in the result paths.
   */
  getResultsPathData() {
    return this.resultPaths.map((node) => node.data)
  }
  /**
   * Executes the path calculation process starting from the given node data.
   * It applies plugins to modify the behavior and appearance of the pathfinding
   * process, sorts plugins by priority and utilizes various helper functions
   * to transform, validate, and observe paths during the calculation.
   *
   * @template TResult - The result type after applying the optional transformation.
   * @param data - The initial node data to start the path calculation.
   * @param transformResults - An optional function to transform the resulting paths.
   * @returns An array of paths that represent the result of the pathfinding process.
   */
  calculate<TResult>(
    data: TNode,
    transformResults?: (results: TPath[]) => TResult[]
  ) {
    this.plugins.sort(
      (plugin1, plugin2) => (plugin1.priority || 0) - (plugin2.priority || 0)
    )
    const createPath = this.createPath
    const getChildrenByNode = this.getChildrenByNode
    const configureFirstNode = this.getSettingFirstPathFn()!
    const transformNode = this.getTransformPathFn()!
    const addNode = this.getAddNodeFn()
    const resultObserver = this.getResultObserverFn()
    const checkStopCalculate = this.getCheckStopCalculateFn()!

    this.resultPaths = []
    let node: TPath | undefined = configureFirstNode(createPath(data))
    resultObserver(node!)
    if (checkStopCalculate(node!)) {
      return [node!]
    }
    while (node) {
      const children = getChildrenByNode(node.node)
      for (let i = 0; i < children.length; i += 1) {
        const child = transformNode(createPath(children[i]), node)
        resultObserver(child)
        if (checkStopCalculate(child)) {
          break
        }
        addNode(child, node)
      }
      node = this.orderPathsToProcess.pop()
    }
    return this.resultPaths
  }
}

export { BaseGraphSolver, QueueType }
