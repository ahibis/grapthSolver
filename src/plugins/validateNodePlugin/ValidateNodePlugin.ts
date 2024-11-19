import Node from "../../BaseGraphSolver/Node";
import GraphPlugin from "../GraphPlugin";

export default class ValidateNodePlugin<T,TCtx = unknown, TNodeCtx=unknown> implements GraphPlugin<T,TCtx, TNodeCtx>{
  
  constructor(private checkNodeIsValid:(node: Node<T, TCtx, TNodeCtx>, parent: Node<T, TCtx, TNodeCtx>)=>boolean){}
  onPathValidate(node: Node<T, TCtx, TNodeCtx>, parent: Node<T, TCtx, TNodeCtx>): boolean {
      return this.checkNodeIsValid(node, parent);
  }
}