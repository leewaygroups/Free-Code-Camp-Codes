/*Slice and Splice
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

/**Solution by Prince O. Onyenike */

function frankenSplice(arr1, arr2, n) {
  var res = arr2.slice(0, n).concat(arr1)
  if(arr2.length > n){
    res = res.concat(arr2.slice(n, arr2.length));
  }

  return res;
}

//frankenSplice([1, 2, 3], [4, 5, 6], 1);

//frankenSplice([1, 2, 3], [4, 5], 1) //should return [4, 1, 2, 3, 5].
