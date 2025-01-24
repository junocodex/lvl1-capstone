"use strict";

let learnMoreButton1 = document.getElementById("learnMore1");
let learnMoreButton2 = document.getElementById("learnMore2");
let cardText1 = document.getElementById("cardtxt1");
let cardText2 = document.getElementById("cardtxt2");

learnMoreButton1.addEventListener("click", () => {
  cardText1.innerHTML = `
    <p> At Critter.inc, our mission is simple: to bring joy and comfort
        to pets and their humans alike. We know your pets are more than
        just animals—they're family. That’s why we strive to offer
        thoughtfully curated products that meet their every need. From
        innovative toys that spark playtime to nutritious treats that
        fuel their adventures, we’re here to make every moment with your
        critter count.</p>    
  `;
});

learnMoreButton2.addEventListener("click", () => {
  cardText2.innerHTML = `
    <p>  Critter.inc was founded by pet lovers, for pet lovers. We’re
         passionate about providing the highest quality products at
         prices that fit your budget. With a focus on sustainability,
         innovation, and unbeatable customer care, we’re committed to
         building a community of happy pets and owners. When you shop
         with us, you’re not just buying pet supplies—you’re joining a
         family that values every wag, purr, and chirp. </p>
    `;
});
