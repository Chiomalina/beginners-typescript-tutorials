function orderProduct(productName: string, quantity: number = 1, discount?: number, shippingMethod = "Standard", giftWrap = false, deliveryDate = "Tomorrow"): void {
    let totalCost = 0;

    // Calculate the product cost
    let basePrice = 100; // Cost per unit of the product
    if (discount !== undefined) {
        basePrice -= discount;
    }
    totalCost = basePrice * quantity;

    // Add shipping cost
    if (shippingMethod === "Express") {
        totalCost += 10;
    }

    // Add gift wrapping cost
    if (giftWrap) {
        totalCost += 5;
    }

    console.log(`Order Details:
    Product: ${productName}
    Quantity: ${quantity}
    Shipping Method: ${shippingMethod}
    Gift Wrap: ${giftWrap}
    Delivery Date: ${deliveryDate}
    Total Cost: $${totalCost}`);
}

// Function call examples:
orderProduct("Laptop"); // Defaults to 1 unit, standard shipping, no discount, no gift wrapping
orderProduct("Smartphone", 2, 20, "Express", true); // Order 2 smartphones with a 20% discount, express shipping, and gift wrapping
orderProduct("Headphones", 3, undefined, "Standard", false, "Next week"); // Order 3 headphones with no discount, standard shipping, and delivery next week