import { BaseGraphSolver } from "../../BaseGraphSolver/BaseGraphSolver";
import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";

export default class addConstrainPlugin<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  priority = -10000;
  onPathTransform(
    node: Path<T, TCtx, TNodeCtx>,
    parent: Path<T, TCtx, TNodeCtx>
  ): Path<T, TCtx, TNodeCtx> {
    node.parent = parent;
    return node;
  }
}
