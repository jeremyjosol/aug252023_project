// Business logic

function Pizza(classicPizza, specialPizza, pizzaSize) {
  this.classicPizza = classicPizza;
  this.specialPizza = specialPizza;
  this.size = pizzaSize;
}

const itsAPizza = new Pizza(["cheese", "veggie", "pepperoni"], ["margherita", "meatlover"], ["small", "medium", "large"]);

Pizza.prototype.purchasePizza = function(size) {
  let pizzaPrice = 15;
  
  if (this.classicPizza && this.size.includes(size)) {
    if (size === "large") {
      pizzaPrice += 5;
    } else if (this.classicPizza && size === "medium") {
      pizzaPrice += 3;
    }
  }
  return pizzaPrice;
};
