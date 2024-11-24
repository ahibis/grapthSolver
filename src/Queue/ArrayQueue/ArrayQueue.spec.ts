import { describe, expect, it } from 'vitest'
import LinkedQueue from './ArrayQueue'

describe('ArrayQueue', () => {
  const queue = new LinkedQueue<number>()
  queue.push(1)
  queue.push(2)
  queue.push(3)
  queue.push(4)
  queue.push(5)
  queue.push(6)
  it('push', () => {
    expect(queue.nodes[0]).toBe(1)
    expect(queue.nodes[1]).toBe(2)
  })
  it('pop', () => {
    const node = queue.pop()
    expect(node).toBe(6)
    const node1 = queue.pop()
    expect(node1).toBe(5)
  })
  it('shift', () => {
    const node = queue.shift()
    expect(node).toBe(1)
  })
  it('find', () => {
    const node = queue.find((node) => node === 3)
    expect(node).toBe(3)
    const node1 = queue.find((node) => node === 1)
    expect(node1).toBe(undefined)
  })
  it('prevNeighbor', () => {
    const node = queue.find((node) => node === 3)
    const node1 = queue.getPrevNeighbor(node!)
    expect(node1).toBe(2)
  })
  it('nextNeighbor', () => {
    const node = queue.find((node) => node === 3)
    const node1 = queue.getNextNeighbor(node!)
    expect(node1).toBe(4)
  })
  it('getNodes', () => {
    const nodes = queue.nodes
    expect(nodes.map((node) => node)).toEqual([2, 3, 4])
  })
  it('filter', () => {
    queue.filter((node) => node !== 3)
    const nodes = queue.nodes
    expect(nodes.map((node) => node)).toEqual([2, 4])
  })
})
