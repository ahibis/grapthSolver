import { BaseGraphSolver } from "../../BaseGraphSolver";
import Node from "../../BaseGraphSolver/Node";
import GraphPlugin from "../GraphPlugin";

export default class LimitOfCountResults<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  constructor(private limitOfCount: number = 1) {}
  onCheckStopCalculate(
    node: Node<T, TCtx, TNodeCtx>,
    graph: BaseGraphSolver<T, TCtx, TNodeCtx>
  ): boolean {
    return graph.results.length >= this.limitOfCount;
  }
}
