// Business logic

function Pizza(classicPizza, specialPizza, classicSize, specialSize) {
  this.classicPizza = classicPizza;
  this.specialPizza = specialPizza;
  this.classicSize = classicSize;
  this.specialSize = specialSize;
  this.toppings = [];
}

Pizza.prototype.purchaseClassicPizza = function(size) {
  let pizzaPrice = 15 + this.toppings.length
  
  if (this.classicPizza && this.classicSize.includes(size)) {
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

  if (this.specialPizza && this.specialSize.includes(size)) {
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
  const classicSize = document.querySelector("select#classic-size").value;
  const specialSize = document.querySelector("select#special-size").value;
  
  if (selectClassicPizza || selectSpecialPizza){
    const itsAPizza = new Pizza(selectClassicPizza, selectSpecialPizza, classicSize, specialSize);
    
    const checkToppings = document.querySelectorAll("input[type=checkbox]:checked");
    checkToppings.forEach(function(topping){
      itsAPizza.addTopping(topping.value);
    });

    if (selectClassicPizza && selectSpecialPizza) {
      const classicPizzaPrice = itsAPizza.purchaseClassicPizza(classicSize);
      const specialPizzaPrice = itsAPizza.purchaseSpecialPizza(specialSize);

      const totalPrice = classicPizzaPrice + specialPizzaPrice;
      document.getElementById("price").innerText = "Your total is " + "$" + totalPrice; 
    

    } else if (selectClassicPizza) {
      totalPrice = itsAPizza.purchaseClassicPizza(classicSize);
      document.getElementById("price").innerText = "Your total is " + "$" + totalPrice;

    
    } else if (selectSpecialPizza) {
      totalPrice = itsAPizza.purchaseSpecialPizza(specialSize);
      document.getElementById("price").innerText = "Your total is " + "$" + totalPrice; 
    }
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza-form").addEventListener("submit", handlePizzaFormSubmission);
});