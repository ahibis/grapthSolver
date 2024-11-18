import { BaseGraphSolver } from "../../BaseGraphSolver";
import Node from "../../Node";
import GraphPlugin from "../GraphPlugin";

export default class LimitOfCountResults<T, TCtx = unknown>
  implements GraphPlugin<T, TCtx>
{
  constructor(private limitOfCount: number = 1) {}
  onCheckStopCalculate(
    node: Node<T, TCtx>,
    graph: BaseGraphSolver<T, TCtx>
  ): boolean {
    return graph.results.length >= this.limitOfCount;
  }
}
