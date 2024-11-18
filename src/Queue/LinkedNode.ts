export default interface LinkedNode<T>{
  nextNode?: LinkedNode<T> 
  prevNode?: LinkedNode<T>,
  data: T,
}