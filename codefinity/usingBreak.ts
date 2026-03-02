let amount_of_stolen_money = 0;
while (true) {
    amount_of_stolen_money = amount_of_stolen_money + 1000;
    console.log(`The amount of stolen money: ${amount_of_stolen_money}`);
    if (amount_of_stolen_money >= 5000) {
        break;
    }
}