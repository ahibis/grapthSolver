import ILinkedQueue from "../ILinkedQueue";
import LinkedNode from "../LinkedNode";
export default class LinkedQueue<T, T1 extends LinkedNode<T> = LinkedNode<T>> implements ILinkedQueue<T, T1> {
    sort(compareFn?: ((a: T1, b: T1) => number) | undefined): void;
    firstNode: T1 | undefined;
    lastNode: T1 | undefined;
    push(node: T1): void;
    pop(): T1 | undefined;
    shift(): T1 | undefined;
    get isEmpty(): boolean;
    find(fn: (node: T1) => boolean): T1 | undefined;
    filter(fn: (node: T1) => boolean): void;
    getPrevNeighbor(node: T1): T1 | undefined;
    getNextNeighbor(node: T1): T1 | undefined;
    get nodes(): T1[];
}
