// function test1(count: number) {
//   let flag = 0;
//   let sum = 0;
//   for (let i = 0; i < count; i += 1) {
//     if (flag === 0) {
//       sum += i;
//     } else {
//       sum += i * 2;
//     }
//   }
//   return sum;
// }
// function test2(count: number) {
//   let flag = 0;
//   let sum = 0;
//   let func = flag == 0 ? (a: number) => a : (a: number) => a * 2;
//   for (let i = 0; i < count; i += 1) {
//     sum += func(i);
//   }
//   return sum;
// }
// function test3(count: number) {
//   let sum = 0;

//   for (let i = 0; i < count; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// function test4(count: number) {
//   let flag = 0;
//   let sum = 0;
//   let func =
//     flag == 0
//       ? function (a: number) {
//           return a;
//         }
//       : function (a: number) {
//           return a * 2;
//         };
//   for (let i = 0; i < count; i += 1) {
//     sum += func(i);
//   }
//   return sum;
// }
// console.log(test1(1000000));
// console.log(test2(1000000));
// console.log(test3(1000000));
// console.time("test1");
// console.log(test1(100000000));
// console.timeEnd("test1");
// console.time("test2");
// console.log(test2(100000000));
// console.timeEnd("test2");
// console.time("test3");
// console.log(test3(100000000));
// console.timeEnd("test3");
// console.time("test4");
// console.log(test4(100000000));
// console.timeEnd("test4");
// console.log(process.memoryUsage());

// interface Node1<T> {
//   data: T;
// }

// class Node2<T, T1 = Node1<T>> {}
// class Node3<T> {
//   constructor() {
//     const node = new Node2<T>();
//   }
// }

// // class Test<T, T1 extends Node1<T> = Node1<T>> {
// //   constructor(private data: T1) {}
// // }
// // new Test<number>({ data: 1 });

// function isNull(value: any): value is null  {
//   return value === null;
// }
// let data: number | null = 1;
// if (!isNull(data)) {
//   const a = data;
// }

// type some = { x: number };
// function check<T>(data: T) {
//   type T1 = T extends some ? T & some : T;
// }
// interface Int<T, T1 = unknown> {
//   data: T;
//   test?: T;
//   next?: Int<T> & T1;
// }
// class Int3<T, T1 extends Int<T, T1>> {
//   private b?: T1;
//   constructor(private a: T1) {
//     a.next = a;
//     this.b = a.next;
//   }
//   f():T1|undefined{
//     return this.b
//   }
// }
// new Int3<number>();
// interface Int<T> {
//   data: T
//   test?: T
//   next?: this
// }
// interface Int1<T> extends Int<T> {
//   test: T
// }
// type Int2<T> = { test: T } & Int<T>

// class Int3<T, T1 extends Int<T> = Int<T>> {
//   private b?: T1

//   constructor(private a: T1) {
//     a.next = a
//     this.b = a.next
//   }

//   f(): T1 | undefined {
//     return this.b
//   }
// }
// type T1<T> = Int<T> | { test: number }
// let a: T1<number> = { data: 42, test: 1, next: { data: 31 } }
// new Int3<number, Int2<number>>({
//   data: 42,
//   test: 3,
//   next: { data: 31, test: 3 },
// }) // Работает
// var a1 = 3
interface B<T> {
  data: T
}
class A<T, T1 = B<T>> {
  constructor() {}
}
new A<number>()
