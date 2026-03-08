function calculatePrice(price:number, quantity: number = 1, discount?: number ): number {
    let priceWithoutDiscount = (price * quantity);
    let result;
    if (discount) {
        result = priceWithoutDiscount - priceWithoutDiscount * (discount/100)
    } else {
        result = priceWithoutDiscount;
    }
    return result;
}

console.log(calculatePrice(20));
console.log(calculatePrice(15, 3));
console.log(calculatePrice(50, 2, 10));