// Business logic

function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.size = pizzaSize;
}

const itsAPizza = new Pizza(["cheese", "pepperoni"], "medium");

itsAPizza.toppings[0];

Pizza.prototype.purchasePizza = function() {
  if (this.size === "medium")
  return true
}