/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()*/

/**Solution by Prince O. Onyenike */


function myReplace(str, before, after) {
  var newBefore;
  if(before.toLowerCase() === before){
    //make after lower
    newBefore = after.toLowerCase();
  }else if(before.toUpperCase() === before){
    //make after upper
    newBefore = after.toUpperCase();
  }else {
    //make only first letter upper
    newBefore = after.replace(/(^[a-z])/,function (p) { return p.toUpperCase(); } );
  }

  return str.replace(before, newBefore);
}

module.exports = myReplace;
//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");