import Path from "../BaseGraphSolver/Path";
interface GraphPlugin<T, TCtx = unknown, TNodeCtx = unknown, TPath extends Path<T, TCtx, TNodeCtx> = Path<T, TCtx, TNodeCtx>> {
    priority?: number;
    onFirstPath?(path: TPath): TPath;
    onPathTransform?(path: TPath, parent: TPath): TPath;
    onPathValidate?(path: TPath, parent: TPath): boolean;
    onCheckIsResult?(path: TPath): boolean;
    onCheckStopCalculate?(path: TPath): boolean;
    onGetResults?: <TResult = TPath>(results: TPath) => TResult;
}
export default GraphPlugin;
