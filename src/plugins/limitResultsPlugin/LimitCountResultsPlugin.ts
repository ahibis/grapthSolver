import { BaseGraphSolver } from "../../BaseGraphSolver";
import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";

export default class LimitOfCountResults<T, TCtx = unknown, TNodeCtx = unknown>
  implements GraphPlugin<T, TCtx, TNodeCtx>
{
  constructor(private graph: BaseGraphSolver<T, TCtx, TNodeCtx>, private limitOfCount: number = 1) {}
  onCheckStopCalculate(
    node: Path<T, TCtx, TNodeCtx>,
  ): boolean {
    return this.graph.results.length >= this.limitOfCount;
  }
}
