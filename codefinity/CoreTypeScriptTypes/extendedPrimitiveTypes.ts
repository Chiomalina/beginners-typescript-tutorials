// null and undefined
let a: null = null;
let b: undefined = undefined;

// symbol
const sym1: symbol = Symbol('unique');
const sym2: symbol = Symbol('unique');
console.log(sym1 === sym2); // false, each symbol is unique

// Using symbol as an object property key
const obj = {
  [sym1]: 'value for sym1'
};
console.log(obj[sym1]); // "value for sym1"

// bigint
let bigNum: bigint = 9007199254740991n; // The 'n' suffix creates a bigint
let bigSum: bigint = bigNum + 10n;
console.log(bigSum); // 9007199254741001n