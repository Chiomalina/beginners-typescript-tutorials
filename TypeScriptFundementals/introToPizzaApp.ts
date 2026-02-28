/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  if(!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return
  }
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const selectedOrder = orderQueue.find((order) => order.id === orderId);

  if (!selectedOrder) {
    console.log("Order not found");
    return null;
  }
  selectedOrder.status = "completed";
  return selectedOrder;
}
