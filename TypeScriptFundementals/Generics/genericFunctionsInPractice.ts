// Generic function to return the first element of an array
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Usage examples:
const num = firstElement([10, 20, 30]); // num: number | undefined
const str = firstElement(["a", "b", "c"]); // str: string | undefined

console.log(num);
console.log(str);
