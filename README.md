# itsAPizza Parlor

## Contributors
Jeremy Josol

## About
This application features a webpage where a user can select either a classic or special pizza with the option of additional toppings and depending on the user selection the price is incremented appropriately and outputs on the page. 

## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* VSCode
* Google Fonts

## Application Setup
```
1. Clone the repository via GitHub
2. Open the 'aug252023_project.zip' file
3. Once the file has been zipped, open 'aug252023_project'
4. Open the 'index.html' file to view the project on your local browser
5. Alternatively, the project can be viewed from the Github Pages link
```
## Github Pages
[itsAPizza Parlor - Click to View](https://jeremyjosol.github.io/aug252023_project/)

## Known Bugs
No major bugs known. Please kindly report any known issues to the repository's creator.

## Tests

Describe: Pizza()
```
Test 1: "It should return properties 'toppings' and 'size' for new Pizza object."
Code: const itsAPizza = new Pizza(["cheese", "pepperoni", "medium"]); 
Expected Output: toppings: ["cheese", "pepperoni"], size: "medium"

Test 2: "It should return the toppings property value of 'cheese'."
Code: itsAPizza.toppings[0];
Expected Output: "cheese"
```
Describe: Pizza.prototype.purchaseClassicPizza(size);
```
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
```
Describe: Pizza.prototype.purchaseSpecialPizza(size);
```
Test 1: "It should mitigate the previous method from having too many conditions but follow a similar formula structurally."
Code:
let pizzaPrice = 18;
if (this.specialPizza && this.size.includes(size)) {
if (size === "large) {
}}
pizzaPrice += 5;
Expected Output: 23
```
Describe: Pizza.prototype.addTopping(topping);
```
Test 1: "Initialize new Pizza property 'topping' and create an empty array."
Code:
itsAPizza.addTopping("basil");
Expected Output: ["basil"]
```
### MIT License

Copyright (c) 2023 Jeremy Josol

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.