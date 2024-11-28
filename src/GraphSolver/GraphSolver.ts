import { BaseGraphSolver, QueueType, Path } from '../BaseGraphSolver'
import { GraphPlugin } from '../plugins'

interface GraphOptions {
  queueType?: QueueType
}

class GraphSolver<
  TNode,
  TPathData = unknown,
  TNodeCtx = unknown,
  TPath extends Path<TNode, TPathData, TNodeCtx> = Path<
    TNode,
    TPathData,
    TNodeCtx
  >,
  TGraphPlugin extends GraphPlugin<
    TNode,
    TPathData,
    TNodeCtx,
    TPath
  > = GraphPlugin<TNode, TPathData, TNodeCtx, TPath>,
> extends BaseGraphSolver<TNode, TPathData, TNodeCtx, TPath, TGraphPlugin> {
  /**
   * Creates an instance of the GraphSolver.
   * @param getChildrenByNode A function that takes a node and returns an array of its children.
   * @param options An options object that can be used to customize the behavior of the GraphSolver.
   * The available options are:
   * - queueType: The type of queue to use. Defaults to arrayQueue.
   * - [all other Path options except 'node']: These options are passed to the Path constructor
   * and can be used to customize the behavior of the Path class.
   */
  constructor(
    getChildrenByNode: (node: TNode) => TNode[],
    options?: GraphOptions & Omit<Path<undefined, TPathData, TNodeCtx>, 'node'>
  ) {
    super(getChildrenByNode, options?.queueType || QueueType.arrayQueue)
  }

  disablePathPop() {
    return this
  }
  /**
   * Enables adding a parent node to the path.
   * All Path will have .parentNode property with the parent node
   * @example
   * const graphSolver = new GraphSolver()
   *   .enableNodeParent()
   *
   */
  enableNodeParent() {
    return this
  }
  /**
   * Enables adding a parent path to the path
   * All Path will have .parent property with the parent path
   */
  enableParent() {
    return this
  }
  /**
   * Enables adding children Nodes to the parent path
   * All Path will have .childrenNodes property with the children nodes
   */
  enableNodeChildren() {
    return this
  }
  /**
   * Enables adding children Paths to the parent path
   * All Path will have .children property with the children paths
   */
  enableChildren() {
    return this
  }
  /**
   * Enables Calculating Depth of the path.
   * All Path will have .depth property which increases by 1 as you move through the graph
   */
  calculateDepth() {
    return this
  }

  /**
   * Sets the order in which the following nodes will be
   * examined by sorting the node queue.
   * @param conditionMakePathOrder function for comparing paths
   * @example
   * const graphSolver = new GraphSolver()
   *   .makePathOrder((path, parent) => {
   *     return path.data.totalDistance - parent.data.totalDistance
   *   })
   */
  makePathOrder(
    conditionMakePathOrder: (path: TPath, parent: TPath) => number
  ) {
    return this
  }

  /**
   * Sets the order in which the following nodes will be
   * examined by sorting the node queue by some scores.
   * @param conditionMakePathOrderByScore function for getting scores by path
   * @example
   * const graphSolver = new GraphSolver()
   *   .makePathOrderByScore(path => path.data.score)
   */
  makePathOrderByScore(conditionMakePathOrderByScore: (path: TPath) => number) {
    return this
  }

  /**
   * Initializes the path data on the each paths.
   * @param pathDataInit function which takes the current path and the previous path
   * and returns the path data for the current path.
   * @example
   * const graphSolver = new GraphSolver()
   *   .pathDataInit((path, prevPath) => {
   *     const pathData = {
   *       ...prevPath.data,
   *       totalDistance: prevPath.data.totalDistance + 1
   *     }
   *     return pathData
   *   })
   */
  pathDataInit(pathDataInit: (path: TPath, prevPath: TPath) => TPathData) {
    return this
  }
  /**
   * Sets the key for the node data. The key is used to
   * identify the node data in the node data map.
   * @param nodeDataKey function which takes the current node and returns
   * the key for the node data.
   * @example
   * const graphSolver = new GraphSolver()
   *   .nodeDataKey(node => node.id)
   */
  nodeDataKey(nodeDataKey: (node: TNode) => string) {
    return this
  }
  /**
   * Initializes the node data for the each nodes.
   * @param nodeDataInit function which takes the current path and the previous path
   * and returns the node data for the current node.
   * @example
   * const graphSolver = new GraphSolver()
   *   .nodeDataInit((path, prevPath) => {
   *     // initializes the node data
   *     const nodeData = {
   *       visitCount: 0,
   *       totalDistance: 0
   *     }
   *     return nodeData
   *   })
   */
  nodeDataInit(nodeDataInit: (path: TPath, prevPath: TPath) => number) {
    return this
  }

  /**
   * Adds a condition to reject the path.
   * @param conditionRejectPath function which takes the current path and the previous path
   * and returns a boolean indicating whether the path should be rejected.
   * @example
   * const graphSolver = new GraphSolver()
   *   .rejectPath((path, prevPath) => {
   *     // rejects the path if the total distance is 10
   *     return path.data.totalDistance >= 10
   *   })
   */
  rejectPath(conditionRejectPath: (path: TPath, prevPath: TPath) => boolean) {
    return this
  }
  /**
   * Adds multiple conditions to reject the paths of the graph. The conditions are
   * applied in the order they are given. If one of the conditions
   * returns true, the path is rejected.
   * @param conditionsRejectPaths functions which take the current path and the
   * previous path and return a boolean indicating whether the path should be
   * rejected.
   * @example
   * const graphSolver = new GraphSolver()
   *   .pathsDynamicReject(
   *     // rejects the path if the total distance is 10
   *     (path, prevPath) => path.data.totalDistance >= 10,
   *     // rejects the path if the node has already been visited
   *     (path, prevPath) => !!prevPath.nodeData?.visitCount
   *   )
   */
  pathsDynamicReject(
    ...conditionsRejectPaths: ((path: TPath, prevPath: TPath) => boolean)[]
  ) {
    return this
  }
  /**
   * Sets the function to determine the key for a given result path.
   * This key is used to uniquely identify paths in the result set.
   * @param resultKey A function that takes a path and returns a string key.
   * @example
   * const graphSolver = new GraphSolver()
   *   .resultKey(path => `${path.node.id}-${path.depth}`)
   */
  resultKey(resultKey: (path: TPath) => string) {
    return this
  }
  /**
   * Sets the condition to determine if a path is a result.
   * @param conditionPathIsResult A function that takes the current path and the
   * previous path and returns a boolean indicating whether the path is a result.
   * @example
   * const graphSolver = new GraphSolver()
   *   .checkPathIsResult((path) => path.data.totalDistance >= 10)
   */
  checkPathIsResult(
    conditionPathIsResult: (path: TPath, prevPath: TPath) => boolean
  ) {
    return this
  }
  /**
   * Rejects paths based on the number of times a node has been visited.
   * @param visitCount The maximum number of times a node can be visited
   * before the path is rejected.
   * @example
   * const graphSolver = new GraphSolver()
   *   .rejectPathByNodeVisit(2)
   */
  rejectPathByNodeVisit(visitCount: number) {
    return this
  }
  /**
   * Limits the number of results returned by the graph solver.
   * When the limit is reached, the graph solver stops calculating new paths.
   * @param limit The maximum number of results to return.
   * @example
   * const graphSolver = new GraphSolver()
   *   .limitResults(10)
   */
  limitResults(limit: number) {
    return this
  }

  /**
   * Starts the graph solver with the given node as the starting point.
   * @param firstNode The node to start the graph solver from.
   * @param onGetResults An optional callback that is called whenever a new result
   * is found. The callback is passed the result path.
   * @example
   * const graphSolver = new GraphSolver()
   * graphSolver.calculate(firstNode, (result) => console.log(result))
   */
  calculate<TResult>(
    firstNode: TNode,
    onGetResults?: (results: TPath) => TResult
  ) {}
}

export { GraphSolver }
