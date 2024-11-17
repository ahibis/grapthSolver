import IQueue from "../IQueue";
import LinkedNode from "./LinkedNode";

export default class LinkedQueue<T extends LinkedNode<T>> implements IQueue<T> {
  firstNode?: T;
  lastNode?: T;
  
  push(node: T) {
    if(!this.lastNode){
      this.lastNode = node;
      this.firstNode = node;
    }
    this.lastNode.next = node;
    node.prev = this.lastNode;
    this.lastNode = node;
  }
  pop(): T| undefined {
    if(this.lastNode){
      const lastNode = this.lastNode
      this.lastNode = this.lastNode.prev;
      if(this.lastNode){
        this.lastNode.next = undefined;
      }
      return lastNode;
    }
  }
  shift(): T|undefined {
    if(this.firstNode){
      const firstNode = this.firstNode
      this.firstNode = this.firstNode.next;
      if(this.firstNode){
        this.firstNode.prev = undefined;
      }
      return firstNode;
    }
  }
  get isEmpty(): boolean {
    return this.firstNode === undefined;
  }
  sort(compareFn?: ((a: T, b: T) => number) | undefined) {
    
  }
  find(fn: (node: T) => boolean) {
    let node = this.firstNode;
    while(node){
      if(fn(node)){
        return node;
      }
      node = node.next;
    }
  }
  filter(fn: (node: T) => boolean) {
    let node = this.firstNode;
    while(node){
      if(!fn(node)){
        if(this.lastNode){
          this.lastNode.prev = node.prev;
        }
        if(this.firstNode){
          this.firstNode.next = node.next;
        }
      }
      node = node.next;
    }
  }
  getPrevNeighbor(node: T): T| undefined {
    return node.prev;
  }
  getNextNeighbor(node: T): T|undefined {
    return node.next;
  }
  get nodes(){
    const nodes:T[] = [];
    let node = this.firstNode;
    while(node){
      nodes.push(node);
      node = node.next
    }
    return nodes;
  }

}