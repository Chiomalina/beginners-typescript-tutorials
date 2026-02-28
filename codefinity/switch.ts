let transactionType: string = "Transfer"; // You can change the operation type
let commission: number;

switch (transactionType) {
    case 'Payment':
        commission = 0.5;
        break;
    case 'Transfer':
        commission = 1.2;
        break;
    case 'Withdrawal':
        commission = 2.0;
        break;
    case 'Deposit':
        commission = 0.0;
        break;
    default:
        commission = -1; // Handle unknown transaction types
}

console.log(`Commission for ${transactionType}: ${commission}%`);