function add(a: number, b: number): number {
  return a + b;
}

// Valid calls
console.log(add(5, 3)); // 8
console.log(add(10, 15)); // 25
console.log(add(-4, 9)); // 5
console.log(add(2.5, 3.5)); // 6

// Invalid (failure) calls
// console.log(add("5", "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add(true, false)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// console.log(add(5)); // Error: Expected 2 arguments, but got 1.
// console.log(add(5, 3, 2)); // Error: Expected 2 arguments, but got 3.