"use strict";

// Products

const productList = [
  { name: "Cat Food", price: "$6.99", inStock: false },
  { name: "Dog Bed", price: "$49.99", inStock: true },
  { name: "Pet Carrier", price: "$34.99", inStock: true },
  { name: "Chew Toy", price: "$8.99", inStock: true },
  { name: "Aquarium", price: "$59.99", inStock: true },
];

function render(productArray) {
  for (let i = 0; i < productArray.length; i++) {
    let inStock = "";

    const productList = productArray[i];

    if (productList.inStock) {
      inStock = "In Stock";
    } else {
      inStock = "Not in Stock";
    }

    let card = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${productList.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${productList.price}</h6>
    <p class="card-text">${inStock}</p>
    </div>
    </div>
    `;

    document.getElementById("main").innerHTML += card;
  }
}

render(productList);
