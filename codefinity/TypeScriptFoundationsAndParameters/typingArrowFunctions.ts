// An arrow function with typed parameters and a typed return value
const add = (a: number, b: number): number => a + b;

// Valid calls
console.log(add(2, 3)); // 5
console.log(add(10, -4)); // 6
console.log(add(2.5, 3.5)); // 6

// Invalid (failure) calls
// console.log(add("2", "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add(true, 5)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// console.log(add(2)); // Error: Expected 2 arguments, but got 1.