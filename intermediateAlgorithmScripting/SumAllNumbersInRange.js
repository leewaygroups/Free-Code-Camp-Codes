/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

/**SOLUTION BY PRINCE O. ONYENIKE*/

/**NOTE */
/**Without precessing, computing the sum of all elements in a range would
 * require a linear traversal of range = linear complexity ==> O(n).
 *
 * However, the range can be preprocessed into an auxilary array.
 * Discounting the precessing cost, of the array, computing the sum of the range elemnt
 * can be achieved with a constant complexity ==> O(1) as implemented below*/

function sumAll(arr) {

  /* PRE-PROCESSING STEPS */
  //Step 1: sort array
  arr = arr.sort(function(a, b){
    return a>b;
  });

  //Step 2: Build auxilary array 'aux' where each aux[i] = aux[i-1] + current-range number
  var aux = [arr[0]];
  var index = 0;
  for(var i=arr[0]+1; i<= arr[arr.length-1]; i++){
    aux[index+1] = aux[index] + i;
    index++;
  }
  /**End PROCESSING */

  // last element in aux is sum of the range of arr elements
  return aux[aux.length-1];
}

module.exports = sumAll;

