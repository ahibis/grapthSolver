import { Path } from '../../BaseGraphSolver'
import GraphPlugin from '../GraphPlugin'

export default class PathTransformPlugin<
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
  constructor(private pathTransform: (path: TPath, parent: TPath) => TPath) {}

  onPathTransform(path: TPath, parent: TPath): TPath {
    return this.pathTransform(path, parent)
  }
}
