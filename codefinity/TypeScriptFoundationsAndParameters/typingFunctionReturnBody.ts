function greet(name: string): string {
  return "Hello, " + name + "!";
}

// Valid calls
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob")); // "Hello, Bob!"
console.log(greet("TypeScript")); // "Hello, TypeScript!"

// Invalid (failure) calls
// console.log(greet()); // Error: Expected 1 argument, but got 0.
// console.log(greet(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(greet(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
// console.log(greet(["Alice"])); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.