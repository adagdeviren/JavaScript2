{
"use strict";

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

// Write a function
// Use the filter array function to take out the lemons
// Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

function showSafeFruits() {
   const newBasket = fruitBasket.filter(fruit => fruit !== "Lemon");
   console.log("My mom bought me a fruit basket, containing " + newBasket +" !" );
}

showSafeFruits();

}