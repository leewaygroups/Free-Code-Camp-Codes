/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()*/

/**Solition by Prince O. Onyenike */


function diffArray(arr1, arr2) {
  return arr1.filter(function(x){
    return arr2.indexOf(x) === -1;
  }).concat(arr2.filter(function(x){
    return arr1.indexOf(x) === -1;
  }));
}

module.exports = diffArray;
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);