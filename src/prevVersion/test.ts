function test1(count: number) {
  let flag = 0;
  let sum = 0;
  for (let i = 0; i < count; i += 1) {
    if (flag === 0) {
      sum += i;
    } else {
      sum += i * 2;
    }
  }
  return sum;
}
function test2(count: number) {
  let flag = 0;
  let sum = 0;
  let func = flag == 0 ? (a: number) => a : (a: number) => a * 2;
  for (let i = 0; i < count; i += 1) {
    sum += func(i);
  }
  return sum;
}
function test3(count: number) {
  let sum = 0;

  for (let i = 0; i < count; i += 1) {
    sum += i;
  }
  return sum;
}
function test4(count: number) {
  let flag = 0;
  let sum = 0;
  let func =
    flag == 0
      ? function (a: number) {
          return a;
        }
      : function (a: number) {
          return a * 2;
        };
  for (let i = 0; i < count; i += 1) {
    sum += func(i);
  }
  return sum;
}
console.log(test1(1000000));
console.log(test2(1000000));
console.log(test3(1000000));
console.time("test1");
console.log(test1(100000000));
console.timeEnd("test1");
console.time("test2");
console.log(test2(100000000));
console.timeEnd("test2");
console.time("test3");
console.log(test3(100000000));
console.timeEnd("test3");
console.time("test4");
console.log(test4(100000000));
console.timeEnd("test4");
console.log(process.memoryUsage());

// interface Node1<T> {
//   data: T;
// }
// class Node2<T extends Node1<T>> {}
// class Node3<T> {
//   constructor() {
    
//     const node = new Node2<T extends Node1<T>>()
//   }
// }
