import Node from "../../BaseGraphSolver/Node";
import GraphPlugin from "../GraphPlugin";

export default class ResultPlugin<T,TCtx = unknown, TNodeCtx=unknown> implements GraphPlugin<T,TCtx, TNodeCtx>{
  
  constructor(private checkNodeIsResult:(node: Node<T, TCtx, TNodeCtx>)=>boolean){}
  onCheckIsResult(node: Node<T, TCtx, TNodeCtx>): boolean {
    return this.checkNodeIsResult(node)
  }
}