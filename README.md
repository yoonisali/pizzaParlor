```
Describe Pizza()

Test: Test: "It should return a Pizza object with two properties for toppings and size"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
Expected Output: myPizza { size: "medium" toppings: ["eggs", "cheese", "fish"] }

Test: Test: "It should log the price of a small, medium, or large pizza"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
      myPizza.sizePrice();
Expected Output: 33.99;

Test: Test: "It should log the price of the toppings on the pizza"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
      myPizza.toppingPrice();
Expected Output: 18;