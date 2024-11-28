import { LinkedNode } from '../queue'

interface Path<TNode, TPath = unknown, TNodeData = unknown>
  extends LinkedNode<TNode> {
  node: TNode
  parent?: this
  depth?: number
  visitsCount?: number
  data: TPath
  prevNode?: this
  nextNode?: this
  nodeData?: TNodeData
}
export default Path
