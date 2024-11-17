export default IQueue;
interface IQueue<T> {
  push(node: T);
  pop(): T| undefined;
  shift():T| undefined;
  
  sort(compareFn?: (a: T, b: T) => number);
  find(fn: (node: T) => boolean);
  filter(fn: (node: T) => boolean);
  getPrevNeighbor(node:T):T| undefined
  getNextNeighbor(node:T):T| undefined
  get isEmpty(): boolean;
  get nodes():T[];
}