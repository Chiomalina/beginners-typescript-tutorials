let number_of_months: number = 3;
let money: number = 920;
const price: number = 105;
let number_of_charges = 0;
do {
    money = money - price;
    number_of_charges++;
} while (number_of_months != number_of_charges)

console.log(`You have ${money} left after subscribing to our service.`)