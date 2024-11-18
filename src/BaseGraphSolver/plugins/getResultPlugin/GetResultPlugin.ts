import Node from "../../Node";
import GraphPlugin from "../GraphPlugin";

export default class ResultPlugin<T,TCtx = unknown> implements GraphPlugin<T,TCtx>{
  constructor(private checkNodeIsResult:(node: Node<T, TCtx>)=>boolean){}
  onCheckIsResult(node: Node<T, TCtx>): boolean {
    return this.checkNodeIsResult(node)
  }
}