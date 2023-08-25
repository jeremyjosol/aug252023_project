// Business logic

function Pizza(classicPizza, specialPizza, pizzaSize) {
  this.classicPizza = classicPizza;
  this.specialPizza = specialPizza;
  this.size = pizzaSize;
}

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

// UI logic


function handlePizzaFormSubmission(event) {
  event.preventDefault();
  const selectClassicPizza = document.querySelector("select#classic-pizza").value;
  const selectSpecialPizza = document.querySelector("select#special-pizza").value;
  const selectSize = document.querySelector("select#size").value;
  
  if (selectClassicPizza || selectSpecialPizza){
    const itsAPizza = new Pizza(selectClassicPizza, selectSpecialPizza, selectSize);
    
    if (selectClassicPizza) {
      console.log(itsAPizza.purchaseClassicPizza(selectSize));
    
    } else if (selectSpecialPizza) {
      console.log(itsAPizza.purchaseSpecialPizza(selectSize));
    }
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza-form").addEventListener("submit", handlePizzaFormSubmission);
});



