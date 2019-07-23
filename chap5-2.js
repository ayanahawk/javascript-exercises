// Your code here.
// high order functions
/*

Higher-Order Functions in JavaScript. 
One of the characteristics of JavaScript that makes it well-suited for functional programming is the fact that it can accept higher-order functions.
 A higher-order function is a function that can take another function as an argument, or that returns a function as a resuly
*/
const loop = (value, test, update, execute) => {
  if (!test(value)) {
    execute(value);
    loop(update(value), test, update, execute);
  }
};
console.log(loop(3, n => n > 0, n => n - 1));

// → 3
// → 2
// → 1
