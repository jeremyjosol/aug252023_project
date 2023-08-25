// Business logic

function Pizza(classicPizza, specialPizza, pizzaSize) {
  this.classicPizza = classicPizza;
  this.specialPizza = specialPizza;
  this.size = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.purchaseClassicPizza = function(size) {
  let pizzaPrice = 15 + this.toppings.length
  
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
  let pizzaPrice = 18 + this.toppings.length;

  if (this.specialPizza && this.size.includes(size)) {
    if (size === "large") {
      pizzaPrice += 5;
    } else if (this.specialPizza && size === "medium") {
      pizzaPrice += 3;
    }
  }
  return pizzaPrice;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// UI logic

function handlePizzaFormSubmission(event) {
  event.preventDefault();
  const selectClassicPizza = document.querySelector("select#classic-pizza").value;
  const selectSpecialPizza = document.querySelector("select#special-pizza").value;
  const selectSize = document.querySelector("select#size").value;
  
  if (selectClassicPizza || selectSpecialPizza){
    const itsAPizza = new Pizza(selectClassicPizza, selectSpecialPizza, selectSize);
    
    const checkToppings = document.querySelectorAll("input[type=checkbox]:checked");
    checkToppings.forEach(function(topping){
      itsAPizza.addTopping(topping.value);
    });

    let totalPrice = 0;

    if (selectClassicPizza) {
      totalPrice = itsAPizza.purchaseClassicPizza(selectSize);
      console.log("Classic pizza", totalPrice);
    
    } else if (selectSpecialPizza) {
      totalPrice = itsAPizza.purchaseSpecialPizza(selectSize);
      console.log("Special pizza", totalPrice);
    }
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza-form").addEventListener("submit", handlePizzaFormSubmission);
});



