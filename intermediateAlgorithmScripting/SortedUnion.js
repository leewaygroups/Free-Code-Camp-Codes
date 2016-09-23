/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()*/

/**Solution by Prince O. Onyenike */

function uniteUnique() {
  var argsArr =  Array.prototype.slice.call(arguments);
    for(var i=1; i<argsArr.length; i++){

      for(var j=0; j<argsArr[i].length; j++){
        if(argsArr[0].indexOf(argsArr[i][j]) === -1){
               argsArr[0].push(argsArr[i][j]);
        }
      }

    }

    return argsArr[0];
}

module.exports = uniteUnique;
//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);