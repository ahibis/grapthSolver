import { BaseGraphSolver } from "../../BaseGraphSolver/BaseGraphSolver";
import Path from "../../BaseGraphSolver/Path";
import GraphPlugin from "../GraphPlugin";
export default class PathValidatePlugin<T, TCtx = unknown, TNodeCtx = unknown> implements GraphPlugin<T, TCtx, TNodeCtx> {
    private graph;
    private checkPathIsValid;
    constructor(graph: BaseGraphSolver<T, TCtx, TNodeCtx>, checkPathIsValid: (node: Path<T, TCtx, TNodeCtx>, graph: BaseGraphSolver<T, TCtx, TNodeCtx>) => boolean);
    onCheckStopCalculate(node: Path<T, TCtx, TNodeCtx>): boolean;
}
