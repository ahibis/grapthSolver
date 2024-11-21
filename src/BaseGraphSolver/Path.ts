import { LinkedNode } from "../queue";

interface Path<T, TPath = undefined, TNodeData = unknown>
  extends LinkedNode<T> {
  data: T;
  parent?: this;
  depth?: number;
  visitsCount?: number;
  pathData?: TPath;
  prevNode?: this;
  nextNode?: this;
  nodeData?: TNodeData;
}
export default Path;
