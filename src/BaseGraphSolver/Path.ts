import { LinkedNode } from "../Queue";

interface Path<T, TPath, TNodeCtx> extends LinkedNode<T>{
  data:T,
  parent?:Path<T, TPath, TNodeCtx>,
  depth?:number,
  visitsCount?:number,
  pathData?:TPath,
  prevNode?:Path<T, TPath, TNodeCtx>,
  nextNode?:Path<T, TPath, TNodeCtx>,
  nodeData?:TNodeCtx
}
export default Path;