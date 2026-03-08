function sumAll(...numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5)); // 5
console.log(sumAll()); // 0 — works fine, no numbers passed
console.log(sumAll(10, -3, 2, 1)); // 10