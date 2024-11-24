import { Path } from '../../BaseGraphSolver'
import GraphPlugin from '../GraphPlugin'

export default class PathPlugin<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  priority = -10000
  onPathTransform(
    node: Path<T, TCtx, TNodeCtx>,
    parent: Path<T, TCtx, TNodeCtx>
  ): Path<T, TCtx, TNodeCtx> {
    node.parent = parent
    return node
  }
}
