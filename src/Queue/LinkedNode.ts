export default interface LinkedNode<T> {
  nextNode?: this
  prevNode?: this
  node: T
}
