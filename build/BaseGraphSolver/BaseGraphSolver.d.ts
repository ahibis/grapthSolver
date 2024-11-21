import ILinkedQueue from "../Queue/ILinkedQueue";
import GraphPlugin from "../plugins/GraphPlugin";
import Path from "./Path";
declare enum QueueType {
    arrayQueue = 0,
    linkedQueue = 1
}
declare class BaseGraphSolver<T, TPathData = unknown, TNodeCtx = unknown, TPath extends Path<T, TPathData, TNodeCtx> = Path<T, TPathData, TNodeCtx>, TGraphPlugin extends GraphPlugin<T, TPathData, TNodeCtx, TPath> = GraphPlugin<T, TPathData, TNodeCtx, TPath>> {
    private queueTypeToQueue;
    orderOfPathPass: ILinkedQueue<T, TPath>;
    private getChildrenByNode;
    private plugins;
    results: TPath[];
    private getResultFnByPlugins;
    private createPath;
    private getTransformPathFn;
    private getValidatePathFn;
    private getSettingFirstPathFn;
    private getCheckIsResultFn;
    private getCheckStopCalculateFn;
    private getAddNodeFn;
    private getResultObserverFn;
    registerPlugin(plugin: TGraphPlugin): void;
    constructor(getChildrenByNode: (node: T) => T[], queueType?: QueueType);
    getResultsData(): T[];
    getResultsPathData(): (TPathData | undefined)[];
    calculateByNode(data: T): TPath[];
}
export { BaseGraphSolver, QueueType };
