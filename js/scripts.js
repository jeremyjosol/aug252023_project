// Business logic

function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.size = pizzaSize;
}

const itsAPizza = new Pizza(["cheese", "pepperoni"], "medium");