import { ArrayQueue, LinkedNode, LinkedQueue } from '../queue'
import ILinkedQueue from '../queue/ILinkedQueue'
import GraphPlugin from '../plugins/GraphPlugin'
import Path from './Path'
enum QueueType {
  arrayQueue,
  linkedQueue,
}
class BaseGraphSolver<
  T,
  TPathData = unknown,
  TNodeCtx = unknown,
  TPath extends Path<T, TPathData, TNodeCtx> = Path<T, TPathData, TNodeCtx>,
  TGraphPlugin extends GraphPlugin<T, TPathData, TNodeCtx, TPath> = GraphPlugin<
    T,
    TPathData,
    TNodeCtx,
    TPath
  >,
> {
  private queueTypeToQueue = {
    [QueueType.arrayQueue]: () => new ArrayQueue<TPath>(),
    [QueueType.linkedQueue]: () => new LinkedQueue<T, TPath>(),
  }

  orderOfPathPass: ILinkedQueue<T, TPath>
  private getChildrenByNode: (node: T) => T[]
  private plugins: TGraphPlugin[] = []
  results: TPath[] = []

  private getResultFnByPlugins<T1>(
    getFnByPlugin: (plugin: TGraphPlugin) => T1,
    mergeFn: (fn: T1, prevFn: T1) => T1,
    defaultFn: T1,
  ) {
    const plugins = this.plugins
    let func: T1 | undefined
    for (let pluginIndex = 0; pluginIndex < plugins.length; pluginIndex += 1) {
      const plugin = plugins[pluginIndex]
      const fnFromPlugin = getFnByPlugin(plugin)
      if (!fnFromPlugin) continue
      if (!func) {
        func = fnFromPlugin
        continue
      }
      func = mergeFn(fnFromPlugin, func)
    }
    return func ? func : defaultFn
  }
  private createPath(data: T): TPath {
    return {
      data,
    } as TPath
  }
  private getTransformPathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onPathTransform?.bind(plugin),
      (fn, prevFn) => (node, parent) => fn!(prevFn!(node, parent), parent),
      (node, parent) => node,
    )
  }
  private getValidatePathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onPathValidate?.bind(plugin),
      (fn, prevFn) => (node, parent) =>
        prevFn!(node, parent) && fn!(node, parent),
      undefined,
    )
  }
  private getSettingFirstPathFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onFirstPath?.bind(plugin),
      (fn, prevFn) => (node) => fn!(prevFn!(node)),
      (node) => node,
    )
  }
  private getCheckIsResultFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onCheckIsResult?.bind(plugin),
      (fn, prevFn) => (node) => fn!(node) || prevFn!(node),
      (node) => false,
    )
  }
  private getCheckStopCalculateFn() {
    return this.getResultFnByPlugins(
      (plugin) => plugin.onCheckStopCalculate?.bind(plugin),
      (fn, prevFn) => (node) => fn!(node) || prevFn!(node),
      (node) => false,
    )
  }
  private getAddNodeFn() {
    const validateFn = this.getValidatePathFn()
    const transformFn = this.getTransformPathFn()
    if (validateFn) {
      return (node: TPath, prevNode: TPath) => {
        const node1 = transformFn!(node, prevNode)
        if (validateFn(node1, prevNode)) {
          this.orderOfPathPass.push(node1)
        }
      }
    }
    return (node: TPath, prevNode: TPath) => {
      const node1 = transformFn!(node, prevNode)
      this.orderOfPathPass.push(node1)
    }
  }
  private getResultObserverFn() {
    const checkIsResultFn = this.getCheckIsResultFn()
    if (checkIsResultFn) {
      return (node: TPath) => {
        if (checkIsResultFn(node)) {
          this.results.push(node)
        }
      }
    }
    return (node: TPath) => {}
  }
  registerPlugin(plugin: TGraphPlugin) {
    this.plugins.push(plugin)
  }
  constructor(
    getChildrenByNode: (node: T) => T[],
    queueType: QueueType = QueueType.arrayQueue,
  ) {
    this.getChildrenByNode = getChildrenByNode
    this.orderOfPathPass = this.queueTypeToQueue[queueType]()
  }
  getResultsData() {
    return this.results.map((node) => node.data)
  }
  getResultsPathData() {
    return this.results.map((node) => node.pathData)
  }
  calculateByNode(data: T) {
    this.plugins.sort(
      (plugin1, plugin2) => (plugin1.priority || 0) - (plugin2.priority || 0),
    )
    const createPath = this.createPath
    const getChildrenByNode = this.getChildrenByNode
    const configureFirstNode = this.getSettingFirstPathFn()!
    const transformNode = this.getTransformPathFn()!
    const addNode = this.getAddNodeFn()
    const resultObserver = this.getResultObserverFn()
    const checkStopCalculate = this.getCheckStopCalculateFn()!

    this.results = []
    let node: TPath | undefined = configureFirstNode(createPath(data))
    resultObserver(node!)
    if (checkStopCalculate(node!)) {
      return [node!]
    }
    while (node) {
      const children = getChildrenByNode(node.data)
      for (let i = 0; i < children.length; i += 1) {
        const child = transformNode(createPath(children[i]), node)
        resultObserver(child)
        if (checkStopCalculate(child)) {
          break
        }
        addNode(child, node)
      }
      node = this.orderOfPathPass.pop()
    }
    return this.results
  }
}
export { BaseGraphSolver, QueueType }
