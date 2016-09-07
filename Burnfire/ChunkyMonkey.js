/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

/**Solution by Prince O. Onyenike */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  var startIndex = 0;
  var lastIndex = size;
  while(startIndex < arr.length){
   result.push(arr.slice(startIndex, lastIndex));

    startIndex = startIndex + size;
    lastIndex = lastIndex + size;
  }

  return result;
}

module.exports = chunkArrayInGroups;
//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].