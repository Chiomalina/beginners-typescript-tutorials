function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

// Implementation signature
function combine(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Concatenate strings
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Add numbers
  }
  throw new Error("Invalid arguments");
}

// Valid calls
console.log(combine("Hello, ", "world"));
console.log(combine(10, 20)); 

// Invalid (failure) calls
// The following will cause compile-time errors in TypeScript:
// console.log(combine("Hello", 5)); 
// console.log(combine(true, false)); 
// console.log(combine(1, "2")); 