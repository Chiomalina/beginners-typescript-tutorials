// Generic function to return the first element of an array
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Usage examples:
const num = firstElement([10, 20, 30]); // num: number | undefined
const str = firstElement(["a", "b", "c"]); // str: string | undefined

console.log(num);
console.log(str);


// Generic function to merge two objects of the same type
function mergeObjects<T>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}

// Usage example:
const merged = mergeObjects({ name: "Alice" }, { age: 30 });
// merged: { name: string; age: number }
console.log(merged)