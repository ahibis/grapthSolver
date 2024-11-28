import { BaseGraphSolver, QueueType } from 'BaseGraphSolver'
import Path from '../BaseGraphSolver/Path'
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
  constructor(
    getChildrenByNode: (node: TNode) => TNode[],
    options?: GraphOptions & Omit<Path<undefined, TPathData, TNodeCtx>, 'node'>
  ) {
    super(getChildrenByNode, options?.queueType || QueueType.arrayQueue)
  }

  disablePathPop() {
    return this
  }
  enableNodeParent() {
    return this
  }
  enableParent() {
    return this
  }
  enableNodeChildren() {
    return this
  }
  enableChildren() {
    return this
  }
  calculateDepth() {
    return this
  }
  makePathOrder(
    conditionMakePathOrderByScore: (path: TPath, parent: TPath) => number
  ) {
    return this
  }

  makePathOrderByScore(conditionMakePathOrderByScore: (path: TPath) => number) {
    return this
  }

  pathDataInit(pathDataInit: (path: TPath, prevPath: TPath) => TPathData) {
    return this
  }
  nodeDataKey(nodeDataKey: (node: TNode) => string) {
    return this
  }
  nodeDataInit(nodeDataInit: (path: TPath, prevPath: TPath) => number) {
    return this
  }

  rejectPath(conditionRejectPath: (path: TPath, prevPath: TPath) => boolean) {
    return this
  }
  pathsDynamicReject(
    ...conditionsRejectPaths: ((path: TPath, prevPath: TPath) => boolean)[]
  ) {
    return this
  }
  resultKey(resultKey: (path: TPath) => string) {
    return this
  }
  checkPathIsResult(
    conditionPathIsResult: (path: TPath, prevPath: TPath) => boolean
  ) {
    return this
  }
  rejectPathByNodeVisit(visitCount: number) {
    return this
  }
  limitResults(limit: number) {
    return this
  }

  calculate<TResult>(
    firstNode: TNode,
    onGetResults?: (results: TPath) => TResult
  ) {}
}

export { GraphSolver }
