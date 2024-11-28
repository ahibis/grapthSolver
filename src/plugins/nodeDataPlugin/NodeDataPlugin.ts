import { Path } from '../../BaseGraphSolver'
import GraphPlugin from '../GraphPlugin'

type TKey<TData> = string | number | TData
export default class NodeDataPlugin<
  TData,
  TPathData = unknown,
  TNodeData = unknown,
  TPath extends Path<TData, TPathData, TNodeData> = Path<
    TData,
    TPathData,
    TNodeData
  >,
> implements GraphPlugin<TData, TPathData, TNodeData, TPath>
{
  priority = -15000
  keyToData = new Map<TKey<TData>, TNodeData>()
  constructor(
    private initNodeData: (node: TPath) => TNodeData,
    private getNodeKey: (node: TPath) => TKey<TData> = (node: TPath) =>
      node.data
  ) {}
  onFirstPath(path: TPath): TPath {
    path.nodeData = this.initNodeData(path)
    const key = this.getNodeKey(path)
    this.keyToData.set(key, path.nodeData)
    return path
  }
  onPathTransform(path: TPath): TPath {
    const key = this.getNodeKey(path)
    const data = this.keyToData.get(key)
    if (data) {
      path.nodeData = data
      return path
    }
    const newData = this.initNodeData(path)
    this.keyToData.set(key, newData)
    path.nodeData = newData
    return path
  }
}
