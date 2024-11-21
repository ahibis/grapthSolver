export interface dfsOption<T, Y> {
    getHash?<T>(data: T): string;
    getChildrens<T>(data: T, payload?: Y): T[];
    isFinished<T>(data: T, payload?: Y): boolean;
    checkChildren?(data: T, payload?: Y): boolean;
    getScore?(data: T, depth: number, payload?: Y): number;
    compareNode?(a: withParent<T>, b: withParent<T>): number;
}
interface withParent<T> {
    parent?: withParent<T>;
    data: T;
    depth: number;
}
export declare function dfs<T, Y>(data: T[], options: dfsOption<T, Y>, payload?: Y): T[];
export {};
