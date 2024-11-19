import { BaseGraphSolver } from "../../BaseGraphSolver/BaseGraphSolver";
import Node from "../../BaseGraphSolver/Node";
import GraphPlugin from "../GraphPlugin";

export default class addConstrainPlugin<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  priority = -10000;
  onNodeTransform(
    node: Node<T, TCtx, TNodeCtx>,
    parent: Node<T, TCtx, TNodeCtx>
  ): Node<T, TCtx, TNodeCtx> {
    node.parent = parent;
    return node;
  }
}
