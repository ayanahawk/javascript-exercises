function every(array, test) {
  // Your code here.
  for (const item of array) {
    if (test(item) === false) {
      return false;
      // if(!test(item)) return false
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
