/*Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/**Solution by Prince O. Onyenike */


function truthCheck(collection, pre) {
  var truth = true;
 for (var i = 0; i < collection.length; i++) {
   if(!collection[i][pre]){
     truth = false; break;
   }
 }

 return truth;
}

module.exports = truthCheck;

/*truthCheck([
  {"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy", "sex": "male"},
  {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}], "sex");*/
