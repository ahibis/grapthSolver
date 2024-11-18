import { LinkedNode } from "../Queue";

interface Node<T, TCtx> extends LinkedNode<T>{
  data:T,
  parent?:Node<T, TCtx>,
  depth?:number,
  visitsCount?:number,
  ctx?:TCtx,
  prevNode?:Node<T, TCtx>,
  nextNode?:Node<T, TCtx>
}
export default Node;