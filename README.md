# _Pizza Parlor_

#### By _**Yoonis Ali**_

#### _This is a webpage that takes an order for a pizza order._

[Click Here](https://yoonisali.github.io/pizzaParlor/) to check out the website!

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _BootStrap_

## Description

_This is a webpage that will take an input from the user and add the size prices and the topping prices together._

## Setup/Installation Requirements

* _Clone git repository_
* _Open html file named index.html in a web browser_

## Tests

```
Describe Pizza()

Test: Test: "It should return a Pizza object with two properties for toppings and size"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
Expected Output: myPizza { size: "medium" toppings: ["eggs", "cheese", "fish"] }

Test: Test: "It should calculate the price of a small, medium, or large pizza"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
      myPizza.calcSizePrice();
Expected Output: 33.99;

Test: Test: "It should calculate the price of the toppings on the pizza"
Code: let myPizza = new Pizza("medium", ["eggs", "cheese", "fish"]);
      myPizza.calcToppingPrice();
Expected Output: 18;

Test: "It should calculate the total price of the order by adding together the price of the pizza based on size and the price of the toppings combined."
Code: let myPizza = new Pizza(sizePrice, toppingPrice)
      myPizza.calcFinalPrice();
Expected Output: 51.99
```

## Known Bugs

* none

## License

MIT
Copyright (c) _Yoonis Ali_





