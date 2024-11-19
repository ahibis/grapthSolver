import { BaseGraphSolver } from "../BaseGraphSolver/BaseGraphSolver";
import Node from "../BaseGraphSolver/Node";
interface GraphPlugin<T, TCtx, TNodeCtx> {
  priority?: number;
  onFirstNode?(node: Node<T, TCtx,TNodeCtx>): Node<T, TCtx,TNodeCtx>;
  onNodeTransform?(node: Node<T, TCtx,TNodeCtx>, parent: Node<T, TCtx,TNodeCtx>): Node<T, TCtx, TNodeCtx>;
  onNodeValidate?(node: Node<T, TCtx, TNodeCtx>, parent: Node<T, TCtx, TNodeCtx>): boolean;
  onCheckIsResult?(node: Node<T, TCtx, TNodeCtx>): boolean;
  onCheckStopCalculate?(node: Node<T, TCtx, TNodeCtx>, graph:BaseGraphSolver<T,TCtx,TNodeCtx>): boolean;
  onGetResults?:<TResult = Node<T, TCtx, TNodeCtx>>(results: Node<T, TCtx, TNodeCtx>)=> TResult;
}
export default GraphPlugin