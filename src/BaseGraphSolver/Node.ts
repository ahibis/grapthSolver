import { LinkedNode } from "../Queue";

interface Node<T, TCtx, TNodeCtx> extends LinkedNode<T>{
  data:T,
  parent?:Node<T, TCtx, TNodeCtx>,
  depth?:number,
  visitsCount?:number,
  ctx?:TCtx,
  prevNode?:Node<T, TCtx, TNodeCtx>,
  nextNode?:Node<T, TCtx, TNodeCtx>,
  nodeCtx?:TNodeCtx
}
export default Node;