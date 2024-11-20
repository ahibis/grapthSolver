import ILinkedQueue from "../ILinkedQueue";
import LinkedNode from "../LinkedNode";

export default class LinkedQueue<T, T1 extends LinkedNode<T> = LinkedNode<T>> implements ILinkedQueue<T, T1> {
  sort(compareFn?: ((a: T1, b: T1) => number) | undefined): void {
    
  }
  firstNode: T1|undefined;
  lastNode: T1|undefined;
  
  push(node: T1) {
    if(!this.lastNode){
      this.lastNode = node;
      this.firstNode = node;
    }
    this.lastNode.nextNode = node;
    node.prevNode = this.lastNode;
    this.lastNode = node;
  }
  pop(): T1| undefined {
    if(this.lastNode){
      const lastNode = this.lastNode
      this.lastNode = this.lastNode.prevNode;
      if(this.lastNode){
        this.lastNode.nextNode = undefined;
      }
      return lastNode;
    }
  }
  shift(): T1|undefined {
    if(this.firstNode){
      const firstNode = this.firstNode
      this.firstNode = this.firstNode.nextNode;
      if(this.firstNode){
        this.firstNode.prevNode = undefined;
      }
      return firstNode;
    }
  }
  get isEmpty(): boolean {
    return this.firstNode === undefined;
  }
  find(fn: (node: T1) => boolean) {
    let node = this.firstNode;
    while(node){
      if(fn(node)){
        return node;
      }
      node = node.nextNode as T1;
    }
  }
  filter(fn: (node: T1) => boolean) {
    let node = this.firstNode;
    while(node){
      if(!fn(node)){
        if(this.lastNode){
          this.lastNode.prevNode = node.prevNode;
        }
        if(this.firstNode){
          this.firstNode.nextNode = node.nextNode;
        }
      }
      node = node.nextNode;
    }
  }
  getPrevNeighbor(node: T1){
    return node.prevNode;
  }
  getNextNeighbor(node: T1){
    return node.nextNode;
  }
  get nodes(){
    const nodes:T1[] = [];
    let node = this.firstNode;
    while(node){
      nodes.push(node);
      node = node.nextNode
    }
    return nodes;
  }

}