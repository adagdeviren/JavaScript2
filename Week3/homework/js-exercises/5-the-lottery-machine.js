{
    "use strict";
    /* Write a function that takes 4 arguments.

        A start value
        An end value
        A callback that executes if the number is divisible by 3
        A callback that executes if the number is divisible by 5 */

    function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

        //The function should first generate an array containing values from start value to end value (inclusive).
        const numbers = [];
        for (let i = startIndex; i <= stopIndex; i++) {
            numbers.push(i);
        }
        console.log(numbers);

        // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
        // Then the function should take the newly created array and iterate over it,
        // and calling the first callback if the array value is divisible by 3.
        for (let num of numbers) {
            if (num % 3 === 0) {
                threeCallback(num);
            }

            if (num % 5 === 0) {
                fiveCallback(num);
            }
        }
    }


    const sayThree = (num) => {
        console.log(`the number: ${num} is divisible by 3`);
    }
    const sayFive = (num) => {
        console.log(`the number: ${num} is divisible by 5`);
    }


    threeFive(10, 15, sayThree, sayFive);

    // Should create an array [10,11,12,13,14,15]
    // and call sayFive, sayThree, sayThree, sayF


}