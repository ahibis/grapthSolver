import { BaseGraphSolver } from "../BaseGraphSolver/BaseGraphSolver";
import Path from "../BaseGraphSolver/Path";
interface GraphPlugin<T, TCtx, TNodeCtx> {
  priority?: number;
  onFirstPath?(path: Path<T, TCtx,TNodeCtx>): Path<T, TCtx,TNodeCtx>;
  onPathTransform?(path: Path<T, TCtx,TNodeCtx>, parent: Path<T, TCtx,TNodeCtx>): Path<T, TCtx, TNodeCtx>;
  onPathValidate?(path: Path<T, TCtx, TNodeCtx>, parent: Path<T, TCtx, TNodeCtx>): boolean;
  onCheckIsResult?(path: Path<T, TCtx, TNodeCtx>): boolean;
  onCheckStopCalculate?(path: Path<T, TCtx, TNodeCtx>): boolean;
  onGetResults?:<TResult = Path<T, TCtx, TNodeCtx>>(results: Path<T, TCtx, TNodeCtx>)=> TResult;
}
export default GraphPlugin