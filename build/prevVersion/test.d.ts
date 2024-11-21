interface Int<T> {
    data: T;
    test?: T;
    next?: this;
}
interface Int1<T> extends Int<T> {
    test: T;
}
type Int2<T> = {
    test: T;
} & Int<T>;
declare class Int3<T, T1 extends Int<T> = Int<T>> {
    private a;
    private b?;
    constructor(a: T1);
    f(): T1 | undefined;
}
type T1<T> = Int<T> | {
    test: number;
};
declare let a: T1<number>;
