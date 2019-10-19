// Using the map and filter functions, rewrite the doubleEvenNumbers function.
{
"use strict";

const myNumbers = [1,2,3,4];

function doubleNumbers(number) {
    return number * 2;
};

const doubleEvenNumbers = myNumbers.filter(number => number % 2 === 0).map(doubleNumbers);
 
console.log(doubleEvenNumbers);
}