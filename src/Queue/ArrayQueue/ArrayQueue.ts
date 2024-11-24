import IQueue from '../IQueue'

export default class ArrayQueue<T> implements IQueue<T> {
  private _nodes: T[] = []
  push(node: T) {
    this._nodes.push(node)
  }
  pop(): T | undefined {
    return this._nodes.pop()
  }
  shift(): T | undefined {
    return this._nodes.shift()
  }
  get isEmpty(): boolean {
    return this._nodes.length === 0
  }
  sort(compareFn?: ((a: T, b: T) => number) | undefined) {
    this._nodes.sort(compareFn)
  }
  find(fn: (node: T) => boolean) {
    return this._nodes.find(fn)
  }
  filter(fn: (node: T) => boolean) {
    this._nodes = this._nodes.filter(fn)
  }
  getPrevNeighbor(node: T): T | undefined {
    const index = this._nodes.indexOf(node)
    return this._nodes[index - 1]
  }
  getNextNeighbor(node: T): T | undefined {
    const index = this._nodes.indexOf(node)
    return this._nodes[index + 1]
  }
  get nodes(): T[] {
    return this._nodes
  }
}
