import LinkedNode from "./LinkedNode";

export default IQueue;
interface IQueue<T> {
  push(node: LinkedNode<T> | T): void;
  pop(): LinkedNode<T> | T | undefined;
  shift(): LinkedNode<T> | T | undefined;

  sort(
    compareFn?: (a: LinkedNode<T> | T, b: LinkedNode<T> | T) => number
  ): void;
  find(fn: (node: LinkedNode<T> | T) => boolean): void;
  filter(fn: (node: LinkedNode<T> | T) => boolean): void;
  getPrevNeighbor(node: LinkedNode<T> | T): LinkedNode<T> | T | undefined;
  getNextNeighbor(node: LinkedNode<T> | T): LinkedNode<T> | T | undefined;
  get isEmpty(): boolean;
  get nodes(): (LinkedNode<T> | T)[];
}
