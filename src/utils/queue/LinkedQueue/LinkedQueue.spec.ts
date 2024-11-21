import {describe, expect, it} from "vitest"
import LinkedQueue from "./LinkedQueue";
import LinkedNode from "../LinkedNode";


describe("LinkedQueue", () => {
  const queue = new LinkedQueue();
  queue.push({data: 1});
  queue.push({data: 2});
  queue.push({data: 3});
  queue.push({data: 4});
  queue.push({data: 5});
  queue.push({data: 6});
  it("push", () => {
    expect(queue.firstNode?.data).toBe(1);
    const node1 = queue.firstNode?.nextNode;
    expect(node1?.data).toBe(2);
  })
  it("pop",()=>{
    const node = queue.pop();
    expect(node?.data).toBe(6);
    const node1 = queue.pop();
    expect(node1?.data).toBe(5);
  })
  it("shift",()=>{
    const node = queue.shift();
    expect(node?.data).toBe(1);
  })
  it("find",()=>{
    const node = queue.find(node=>node.data == 3);
    expect(node?.data).toBe(3);
    const node1 = queue.find(node=>node.data == 1);
    expect(node1).toBe(undefined);
  })
  it("prevNeighbor",()=>{
    const node = queue.find(node=>node.data == 3);
    const node1 = queue.getPrevNeighbor(node!);
    expect(node1?.data).toBe(2);
  })
  it("nextNeighbor",()=>{
    const node = queue.find(node=>node.data == 3);
    const node1 = queue.getNextNeighbor(node!);
    expect(node1?.data).toBe(4);
  })
  it("getNodes",()=>{
    const nodes = queue.nodes;
    expect(nodes.map(node=>node.data)).toEqual([2,3,4]);
  })
  it("filter", ()=>{
    queue.filter(node=>node.data != 3);
    const nodes = queue.nodes;
    expect(nodes.map(node=>node.data)).toEqual([2,4]);
  })
  it("empty", ()=>{
    expect(queue.isEmpty).toBe(false);
  })
})