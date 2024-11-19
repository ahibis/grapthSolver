import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";

export default class ResultPlugin<T,TCtx = unknown, TNodeCtx=unknown> implements GraphPlugin<T,TCtx, TNodeCtx>{
  
  constructor(private checkNodeIsResult:(node: Path<T, TCtx, TNodeCtx>)=>boolean){}
  onCheckIsResult(node: Path<T, TCtx, TNodeCtx>): boolean {
    return this.checkNodeIsResult(node)
  }
}