import IQueue from "../IQueue";
import LinkedNode from "../LinkedNode";

export default class LinkedQueue<T> implements IQueue<T> {
  firstNode?: LinkedNode<T>;
  lastNode?: LinkedNode<T>;
  
  push(node: LinkedNode<T>) {
    if(!this.lastNode){
      this.lastNode = node;
      this.firstNode = node;
    }
    this.lastNode.nextNode = node;
    node.prevNode = this.lastNode;
    this.lastNode = node;
  }
  pop(): LinkedNode<T>| undefined {
    if(this.lastNode){
      const lastNode = this.lastNode
      this.lastNode = this.lastNode.prevNode;
      if(this.lastNode){
        this.lastNode.nextNode = undefined;
      }
      return lastNode;
    }
  }
  shift(): LinkedNode<T>|undefined {
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
  sort(compareFn?: ((a: T, b: T) => number) | undefined) {
    
  }
  find(fn: (node: LinkedNode<T>) => boolean) {
    let node = this.firstNode;
    while(node){
      if(fn(node)){
        return node;
      }
      node = node.nextNode;
    }
  }
  filter(fn: (node: LinkedNode<T>) => boolean) {
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
  getPrevNeighbor(node: LinkedNode<T>){
    return node.prevNode;
  }
  getNextNeighbor(node: LinkedNode<T>){
    return node.nextNode;
  }
  get nodes(){
    const nodes:LinkedNode<T>[] = [];
    let node = this.firstNode;
    while(node){
      nodes.push(node);
      node = node.nextNode
    }
    return nodes;
  }

}