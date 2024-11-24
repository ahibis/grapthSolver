export default IQueue
interface IQueue<T> {
  push(node: T): void
  pop(): T | undefined
  shift(): T | undefined

  sort(compareFn?: (a: T, b: T) => number): void
  find(fn: (node: T) => boolean): void
  filter(fn: (node: T) => boolean): void
  getPrevNeighbor(node: T): T | undefined
  getNextNeighbor(node: T): T | undefined
  get isEmpty(): boolean
  get nodes(): T[]
}
