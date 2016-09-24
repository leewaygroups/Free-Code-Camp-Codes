/*Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()*/

/**Solution by Prince O. Onyenike */


function findElement(arr, func) {
  var result;
 for (var i = 0; i < arr.length; i++) {
   if(func(arr[i])){
     result = arr[i];
     break;
   }
 }
 return result;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
