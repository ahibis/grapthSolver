import { Path } from '../../BaseGraphSolver'
import GraphPlugin from '../GraphPlugin'

export default class PathDataPlugin<T, TPathData = unknown, TNodeData = unknown>
  implements GraphPlugin<T, TPathData, TNodeData>
{
  priority = -10000
  constructor(
    private initDataPath: (node: Path<T, TPathData, TNodeData>) => TPathData,
    private getPathDataForNewNode: (
      path: Path<T, TPathData, TNodeData>,
      parent: Path<T, TPathData, TNodeData> & { pathData: TPathData }
    ) => TPathData
  ) {}
  onFirstPath(
    path: Path<T, TPathData, TNodeData>
  ): Path<T, TPathData, TNodeData> {
    path.pathData = this.initDataPath(path)
    return path
  }
  onPathTransform(
    path: Path<T, TPathData, TNodeData>,
    parent: Path<T, TPathData, TNodeData>
  ): Path<T, TPathData, TNodeData> {
    path.pathData = this.getPathDataForNewNode(
      path,
      parent as Path<T, TPathData, TNodeData> & { pathData: TPathData }
    )
    return path
  }
}
