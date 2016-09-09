/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

/**Solution by Prince O Onyenike */


function destroyer(arr) {
  // Remove all the values
 var args = Array.prototype.slice.call(arguments, 1); //.slice(1, arguments.length);
  return arguments[0].filter(function(elem){
    return args.indexOf(elem) == -1;
  });

}
module.exports = destroyer;

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);