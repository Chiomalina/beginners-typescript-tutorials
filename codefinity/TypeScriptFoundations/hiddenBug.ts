// JS example with a hidden bug
function multiply(a, b) {
    return a * b;
}

const result = multiply("5", 2);
console.log(result)

// TS version prevents the bug
function multiplyTs(a: number, b: number): number {
    return a * b;
}

const resultTs = multiply("5", 2);
console.log(resultTs)
