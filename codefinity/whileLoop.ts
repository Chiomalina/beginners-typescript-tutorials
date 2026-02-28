let condition: boolean = true;
let number_of_rabbits: number = 2;
while (condition) {
    number_of_rabbits = number_of_rabbits * 2;
    if (number_of_rabbits > 50) {
        condition = false;
    }
}
console.log(`Total number of rabbits is ${number_of_rabbits}`)