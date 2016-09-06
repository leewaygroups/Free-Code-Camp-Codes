/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/


/**Solution by Prince O. Onyenike */

function findLongestWord(str) {
  var arr = str.split(" ");
  var num = 0;
  for (var i=0; i<arr.length; i++){
    if(arr[i].length > num){
      num = arr[i].length;
    }
  }

  return num;
}

module.exports = findLongestWord;