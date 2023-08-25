// Business logic

function Pizza(classicPizza, specialPizza, pizzaSize) {
  this.classicPizza = classicPizza;
  this.specialPizza = specialPizza;
  this.size = pizzaSize;
}

const itsAPizza = new Pizza(["cheese", "veggie", "pepperoni"], ["margherita", "meatlover"], ["small", "medium", "large"]);

Pizza.prototype.purchaseClassicPizza = function(size) {
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

Pizza.prototype.purchaseSpecialPizza = function(size) {
  let pizzaPrice = 18;

  if (this.specialPizza && this.size.includes(size)) {
    if (size === "large") {
      pizzaPrice += 5;
    } else if (this.specialPizza && size === "medium") {
      pizzaPrice += 3;
    }
  }
  return pizzaPrice;
};


