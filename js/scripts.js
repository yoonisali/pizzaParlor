// Business Logic\

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
  if (toppings.includes("chicken")) {
    price += 6;
  }
  if (toppings.includes("pineapples")) {
    price += 6;
  }
  if (toppings.includes("cheese")) {
    price += 6;
  }
  if (toppings.includes("motor-oil")) {
    price += 6;
  }
  if (toppings.includes("eggs")) {
    price += 6;
  }
  if (toppings.includes("fish")) {
    price += 6;
  }
  return price;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

// UI Logic

// Console Testing
