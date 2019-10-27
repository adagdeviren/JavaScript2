/* In this exercise you'll be presented with a code snippet.
Your task is to guess the output and write out your reasoning in 50 words or less. */

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

/*
    The output is an alert on the page says '12'.
    first, the code defines a global variable
    then defines a function which changes the value of variable 'a',
    and returns a functions that alerts the user with value of 'a'.
*/