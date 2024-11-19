import { BaseGraphSolver } from "../../BaseGraphSolver/BaseGraphSolver";
import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";

export default class addConstrainPlugin<T,TCtx = unknown, TNodeCtx=unknown> implements GraphPlugin<T,TCtx, TNodeCtx>{
  
  constructor(private checkPathIsValid:(node: Path<T, TCtx, TNodeCtx>,graph: BaseGraphSolver<T, TCtx, TNodeCtx>)=>boolean){}
  onCheckStopCalculate(node: Path<T, TCtx, TNodeCtx>, graph: BaseGraphSolver<T, TCtx, TNodeCtx>): boolean {
    return !this.checkPathIsValid(node, graph);
  }
}