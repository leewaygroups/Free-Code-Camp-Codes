/*Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
*/

/**Solution by Prince O. Onyenike */
function pairwise(arr, arg) {
 var pairs = [];
 for (var i = 0; i < arr.length; i++) {
   if(isIndexUsed(i, pairs)){continue;}
   for(var j=i+1; j<arr.length; j++){
      if(isIndexUsed(j, pairs) || isIndexUsed(i, pairs)){continue;}
      if(arr[i] + arr[j] === arg){
        pairs.push([i, j]);
      }
   }
 }
  if(!pairs.length){
    return 0;
  }else{
   var result = 0;
    for(var l=0; l<pairs.length; l++){
      result += pairs[l][0] + pairs[l][1];
    }
    return result;
  }
}

function isIndexUsed(index, pairs){
  var used = false;
  if(pairs.length){
    for(var k=0; k<pairs.length; k++){
      if(pairs[k].indexOf(index) !== -1){
        used = true; break;
      }
    }
  }

  return used;
}

module.exports = pairwise;

//var test = pairwise([7, 9, 11, 13, 15], 20) //should return 6.
//var test = pairwise([1, 1, 1], 2) // should return 1.
//var test = pairwise([1, 3, 2, 4], 4) //should return 1.
//var test = pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
//var test = pairwise([], 100) //should return 0.