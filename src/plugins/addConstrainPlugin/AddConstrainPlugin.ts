import { BaseGraphSolver } from "../../BaseGraphSolver/BaseGraphSolver";
import Node from "../../BaseGraphSolver/Node";
import GraphPlugin from "../GraphPlugin";

export default class addConstrainPlugin<T,TCtx = unknown, TNodeCtx=unknown> implements GraphPlugin<T,TCtx, TNodeCtx>{
  
  constructor(private checkPathIsValid:(node: Node<T, TCtx, TNodeCtx>,graph: BaseGraphSolver<T, TCtx, TNodeCtx>)=>boolean){}
  onCheckStopCalculate(node: Node<T, TCtx, TNodeCtx>, graph: BaseGraphSolver<T, TCtx, TNodeCtx>): boolean {
    return !this.checkPathIsValid(node, graph);
  }
}