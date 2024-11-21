import IQueue from "../IQueue";
export default class ArrayQueue<T> implements IQueue<T> {
    private _nodes;
    push(node: T): void;
    pop(): T | undefined;
    shift(): T | undefined;
    get isEmpty(): boolean;
    sort(compareFn?: ((a: T, b: T) => number) | undefined): void;
    find(fn: (node: T) => boolean): T | undefined;
    filter(fn: (node: T) => boolean): void;
    getPrevNeighbor(node: T): T | undefined;
    getNextNeighbor(node: T): T | undefined;
    get nodes(): T[];
}
