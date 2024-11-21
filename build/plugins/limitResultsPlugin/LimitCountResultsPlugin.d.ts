import { BaseGraphSolver } from "../../BaseGraphSolver";
import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";
export default class LimitOfCountResults<T, TCtx = unknown, TNodeCtx = unknown> implements GraphPlugin<T, TCtx, TNodeCtx> {
    private graph;
    private limitOfCount;
    constructor(graph: BaseGraphSolver<T, TCtx, TNodeCtx>, limitOfCount?: number);
    onCheckStopCalculate(node: Path<T, TCtx, TNodeCtx>): boolean;
}
