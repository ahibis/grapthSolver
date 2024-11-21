"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedQueue {
    sort(compareFn) {
    }
    push(node) {
        if (!this.lastNode) {
            this.lastNode = node;
            this.firstNode = node;
        }
        this.lastNode.nextNode = node;
        node.prevNode = this.lastNode;
        this.lastNode = node;
    }
    pop() {
        if (this.lastNode) {
            const lastNode = this.lastNode;
            this.lastNode = this.lastNode.prevNode;
            if (this.lastNode) {
                this.lastNode.nextNode = undefined;
            }
            return lastNode;
        }
    }
    shift() {
        if (this.firstNode) {
            const firstNode = this.firstNode;
            this.firstNode = this.firstNode.nextNode;
            if (this.firstNode) {
                this.firstNode.prevNode = undefined;
            }
            return firstNode;
        }
    }
    get isEmpty() {
        return this.firstNode === undefined;
    }
    find(fn) {
        let node = this.firstNode;
        while (node) {
            if (fn(node)) {
                return node;
            }
            node = node.nextNode;
        }
    }
    filter(fn) {
        let node = this.firstNode;
        while (node) {
            if (!fn(node)) {
                if (this.lastNode) {
                    this.lastNode.prevNode = node.prevNode;
                }
                if (this.firstNode) {
                    this.firstNode.nextNode = node.nextNode;
                }
            }
            node = node.nextNode;
        }
    }
    getPrevNeighbor(node) {
        return node.prevNode;
    }
    getNextNeighbor(node) {
        return node.nextNode;
    }
    get nodes() {
        const nodes = [];
        let node = this.firstNode;
        while (node) {
            nodes.push(node);
            node = node.nextNode;
        }
        return nodes;
    }
}
exports.default = LinkedQueue;
