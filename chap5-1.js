const arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

function get1DArray(arr) {
  return arr.join().split(',');
}

console.log(get1DArray(arrays));
