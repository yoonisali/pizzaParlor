// Business Logic

// Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}
// Adds a price to each size of pizza
Pizza.prototype.sizePrice = function () {
  let price = this.price;
  if (this.size === "small") {
    price += 22.99;
  } else if (this.size === "medium") {
    price += 33.99;
  } else if (this.size === "large") {
    price += 44.99;
  } 
  return price;
};

  // Adds 6$ for each topping
Pizza.prototype.toppingPrice = function () {
  let price = this.price;
  if (this.toppings.includes("chicken")) {
    price += 6;
  }
  if (this.toppings.includes("pineapples")) {
    price += 6;
  }
  if (this.toppings.includes("cheese")) {
    price += 6;
  }
  if (this.toppings.includes("motor-oil")) {
    price += 6;
  }
  if (this.toppings.includes("eggs")) {
    price += 6;
  }
  if (this.toppings.includes("fish")) {
    price += 6;
  }
  return price;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

// UI Logic
function displayIn(event) {
  event.preventDefault();
  const sizeInput = document.getElementById("size").value;
  const chickenInput = document.getElementById("chicken").value;
  const pineInput = document.getElementById("pine").value;
  const cheeseInput = document.getElementById("cheese").value;
  const oilInput = document.getElementById("oil").value;
  const eggsInput = document.getElementById("eggs").value;
  const fishInput = document.getElementById("fish").value;
}

// Console Testing
let onePizza = new Pizza("small", ["eggs"])
let twoPizza = new Pizza("medium", ["motor-oil", "chicken"])
let threePizza = new Pizza("large", ["chicken", "pineapples", "cheese"])
console.log(onePizza.sizePrice());
console.log(twoPizza.sizePrice());
console.log(threePizza.sizePrice());
console.log(onePizza.toppingPrice());
console.log(twoPizza.toppingPrice());
console.log(threePizza.toppingPrice());
