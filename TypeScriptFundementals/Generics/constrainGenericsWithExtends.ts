function logLength<T extends { length: number }>(item: T): void {
  console.log(`Length is: ${item.length}`);
}

logLength("hello"); // Output: Length is: 5
logLength([1, 2, 3]); // Output: Length is: 3
logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'