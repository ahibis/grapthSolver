"use strict";
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
class Int3 {
    constructor(a) {
        this.a = a;
        a.next = a;
        this.b = a.next;
    }
    f() {
        return this.b;
    }
}
let a = ({ data: 42, test: 1, next: { data: 31 } });
new Int3({ data: 42, test: 3, next: { data: 31, test: 3 } }); // Работает
