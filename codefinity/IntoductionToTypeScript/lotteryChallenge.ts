// Lottery Challenge Solution 1
function giveATry(values: number): string {
  if (values === 2 || values === 7) {
    return "Congratulations, you are now rich!";
  }
  return "Unfortunely, you lost, come back tomorrow.";
}

// Lottery Challenge Solution 2
let luckyNumbers = [2, 7];

function giveATry2(values: number): string {
  return luckyNumbers.includes(values)
    ? "Congratulations, you are now rich!"
    : "Unfortunely, you lost, come back tomorrow";
}


let randomValue = Math.floor(Math.random() * 10);
console.log(`You got the number ${randomValue}!`);
let lotteryOutput = giveATry(randomValue);
console.log(lotteryOutput);
let lotteryOutput2 = giveATry2(randomValue);
console.log(lotteryOutput2);


