// Swiggy | Machine Coding: Recursive Array Flattening
// Question: Implement a polyfill for Array.prototype.flat(). Your implementation must handle
// the depth argument correctly.

//const nestedData = [2, [7, [8]]];

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  */

//ANSWER

function customFlat(arr, depth = 1) {
  // Your recursive implementation here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0)
      result.push(...customFlat(arr[i], depth - 1));
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(customFlat(nestedData, 1));
// [3, [7, 8]]
// console.log(customFlat(nestedData, 2)); // [7, 8]
// console.log(customFlat(nestedData, Infinity)); // [9, 10, 11, 7, 8, 12]
