import { LinkedNode } from '../queue'
/**
 * Interface Path describes the path created during the graph pass
 *
 * @interface Path
 * @extends {LinkedNode<TNode>}
 * @template TNode Type of node
 * @template TPath This type describes the data required to calculate values during a pass
 * @template TNodeData  This type describes additional mutable node data. Such as the number of visits, the maximum length to the node, and others
 */
interface Path<TNode, TPath = unknown, TNodeData = unknown>
  extends LinkedNode<TNode> {
  node: TNode
  // The mutable path data
  data: TPath
  // Additional mutable node data
  nodeData?: TNodeData
  parent?: this
  parentNode?: TNode
  children?: this[]
  childrenNode?: TNode[]
  // The depth of the path
  depth?: number
  prevNode?: this
  nextNode?: this
}
export default Path
