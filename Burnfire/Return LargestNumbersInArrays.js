/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators*/


/**Solution by Prince O. Onyenike */

function largestOfFour(arr) {
  var largest = [];
  for(var i=0; i<arr.length; i++){
    var larg = arr[i][0];
    for(var j=0; j<arr[i].length; j++){
      if(larg < arr[i][j]){
        larg = arr[i][j];
      }
    }
    largest.push(larg);
  }
  // You can do this!
  return largest;
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

module.exports = largestOfFour;