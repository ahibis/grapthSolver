import { BaseGraphSolver } from "../BaseGraphSolver";
import Node from "../Node";
interface GraphPlugin<T, TCtx> {
  priority?: number;
  onFirstNode?(node: Node<T, TCtx>): Node<T, TCtx>;
  onNodeTransform?(node: Node<T, TCtx>, parent: Node<T, TCtx>): Node<T, TCtx>;
  onNodeValidate?(node: Node<T, TCtx>, parent: Node<T, TCtx>): boolean;
  onCheckIsResult?(node: Node<T, TCtx>): boolean;
  onCheckStopCalculate?(node: Node<T, TCtx>, graph:BaseGraphSolver<T,TCtx>): boolean;
  onGetResults?:<TResult = Node<T, TCtx>>(results: Node<T, TCtx>)=> TResult;
}
export default GraphPlugin