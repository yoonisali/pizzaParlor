// Business Logic

// Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}
// Adds a price to each size of pizza
Pizza.prototype.calcSizePrice = function () {
  let price = 0;
  if (this.size === "small") {
    price += 22.99;
  } else if (this.size === "medium") {
    price += 33.99;
  } else if (this.size === "large") {
    price += 44.99;
  }
  this.sizePrice = price;
  return this.sizePrice;
};

// Adds 6$ for each topping
Pizza.prototype.calcToppingPrice = function () {
  let price = 0;
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
  this.toppingPrice = price;
  return this.toppingPrice;
};

Pizza.prototype.calcFinalPrice = function (sizePrice, toppingPrice) {
  this.totalPrice = sizePrice + toppingPrice;
  return this.totalPrice;
};

// UI Logic
function displayIn() {
  let pizzaSize = document.querySelector(".size").value;

  let pizzaToppings = [];
  let toppingInputs = document.querySelectorAll(".topping");
  toppingInputs.forEach(function (topping) {
    if (topping.checked) {
      pizzaToppings.push(topping.value);
    }
  });

  const pizzaOrder = new Pizza(pizzaSize, pizzaToppings);
  const orderSize = pizzaOrder.calcSizePrice();
  const orderTopping = pizzaOrder.calcToppingPrice();
  const fullPrice = pizzaOrder.calcFinalPrice(orderSize, orderTopping);


  document.getElementById("displayOrder").innerHTML = "Total: " + fullPrice;
}

const reset = function () {
  window.location.reload();
};

window.addEventListener("load", function () {
  document
    .getElementById("pizzaShop")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      displayIn();
    });
  document.getElementById("reset-btn").addEventListener("click", reset);
});

