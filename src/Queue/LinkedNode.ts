export default interface LinkedNode<T extends LinkedNode<T>>{
  next?: T
  prev?: T
}