import { LinkedNode } from "../Queue";

interface Path<T, TCtx, TNodeCtx> extends LinkedNode<T>{
  data:T,
  parent?:Path<T, TCtx, TNodeCtx>,
  depth?:number,
  visitsCount?:number,
  ctx?:TCtx,
  prevNode?:Path<T, TCtx, TNodeCtx>,
  nextNode?:Path<T, TCtx, TNodeCtx>,
  nodeCtx?:TNodeCtx
}
export default Path;