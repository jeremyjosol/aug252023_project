// Business logic

function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.size = pizzaSize;
}

const itsAPizza = new Pizza(["cheese", "pepperoni"], ["small", "medium", "large"]);

Pizza.prototype.purchasePizza = function() {
  let pizzaPrice = 15;
  if (this.toppings.includes("pepperoni") && this.size.includes("medium"))
  return pizzaPrice + 3;
}