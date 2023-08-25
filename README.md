## Tests

Describe: Pizza()

Test 1: "It should return properties 'toppings' and 'size' for new Pizza object."
Code: const itsAPizza = new Pizza(["cheese", "pepperoni", "medium"]); 
Expected Output: toppings: ["cheese", "pepperoni"], size: "medium"

Test 2: "It should return the toppings property value of 'cheese'."
Code: itsAPizza.toppings[0];
Expected Output: "cheese"

Describe: Pizza.prototype.purchasePizza();

Test 1: "If the value of the 'size' property of itsAPizza is 'medium', return true."
Code: itsAPizza.purchasePizza();
Expected Output "true"
