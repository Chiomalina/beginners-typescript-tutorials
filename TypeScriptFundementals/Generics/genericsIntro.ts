function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);         // num is of type number
const str = identity<string>("hello");    // str is of type string
const obj = identity<{ x: number }>({ x: 10 }); // obj is of type { x: number }

console.log(num)
console.log(str)
console.log(obj)