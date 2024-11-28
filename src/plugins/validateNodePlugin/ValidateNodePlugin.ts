import Path from '../../BaseGraphSolver/Path'
import GraphPlugin from '../GraphPlugin'

export default class ValidateNodePlugin<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  priority = 1000
  constructor(
    private checkNodeIsValid: (
      node: Path<T, TCtx, TNodeCtx>,
      parent: Path<T, TCtx, TNodeCtx>
    ) => boolean
  ) {}
  onPathValidate(
    node: Path<T, TCtx, TNodeCtx>,
    parent: Path<T, TCtx, TNodeCtx>
  ): boolean {
    return this.checkNodeIsValid(node, parent)
  }
}
