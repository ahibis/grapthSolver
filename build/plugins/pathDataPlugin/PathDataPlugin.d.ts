import { Path } from "../../BaseGraphSolver";
import GraphPlugin from "../GraphPlugin";
export default class PathDataPlugin<T, TPathData = unknown, TNodeData = unknown> implements GraphPlugin<T, TPathData, TNodeData> {
    private initDataPath;
    private getPathDataForNewNode;
    priority: number;
    constructor(initDataPath: (node: Path<T, TPathData, TNodeData>) => TPathData, getPathDataForNewNode: (path: Path<T, TPathData, TNodeData>, parent: Path<T, TPathData, TNodeData> & {
        pathData: TPathData;
    }) => TPathData);
    onFirstPath(path: Path<T, TPathData, TNodeData>): Path<T, TPathData, TNodeData>;
    onPathTransform(path: Path<T, TPathData, TNodeData>, parent: Path<T, TPathData, TNodeData>): Path<T, TPathData, TNodeData>;
}
