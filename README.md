## Tests

Describe: Pizza()

Test 1: "It should return properties 'toppings' and 'size' for new Pizza object."
Code: const itsAPizza = new Pizza(["cheese", "pepperoni", "medium"]); 
Expected Output: toppings: ["cheese", "pepperoni"], size: "medium"

Test 2: "It should return the toppings property value of 'cheese'."
Code: itsAPizza.toppings[0];
Expected Output: "cheese"

Describe: Pizza.prototype.purchaseClassicPizza(size);

Test 1: "If the value of the 'size' property of itsAPizza is 'medium', return true."
Code: itsAPizza.purchasePizza();
Expected Output: "true"

Test 2: "If the value of the 'size' property of itsAPizza is 'medium', return the number 15."
Code: itsAPizza.purchasePizza();
Expected Output: 15

Test 3: "If the value of the 'size' property of itsAPizza is 'medium' and includes the value 'pepperoni' from the 'toppings' property, return pizzaPrice + 3."
Code: 
let pizzaPrice = 15;
if (this.size === "medium" && this.toppings.includes("pepperoni"))
return pizzaPrice + 3;
itsAPizza.purchasePizza();
Expected Output: 18

Test 4: "Turn the 'size' property into an array. If 'toppings' includes 'pepperoni' and 'size' includes 'medium', return pizzaPrice + 3.
Code:
let pizzaPrice = 15;
if (this.toppings.includes("pepperoni") && this.size.includes("medium"))
return pizzaPrice + 3;
Expected Output: 18

Test 5: "Rename 'toppings' property as 'classicPizza' and create new property for an array of 'specialPizza'. If 'classicPizza' and 'large', return pizzaPrice."
Code:
let pizzaPrice = 15;
if (this.classicPizza && this.size.includes(size)) {
if (size === "large") {
}}
pizzaPrice += 5;
Expected Output: 20

Describe: Pizza.prototype.purchaseSpecialPizza(size);

Test 1: "It should mitigate the previous method from having too many conditions but follow a similar formula structurally."
Code:
let pizzaPrice = 18;
if (this.specialPizza && this.size.includes(size)) {
if (size === "large) {
}}
pizzaPrice += 5;
Expected Output: 23

Describe: Pizza.prototype.addTopping(topping);

Test 1: "Initialize new Pizza property 'topping' and create an empty array."
Code:
itsAPizza.addTopping("basil");
Expected Output: ["basil"]


