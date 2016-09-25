/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object*/

/**Solution by Prince O. Onyenike */


function addTogether() {
  if(!isNumber(arguments[0])) return undefined;
  if(arguments.length === 2){
    if(!isNumber(arguments[1])) return undefined;
    return arguments[0] + arguments[1];
  }else{
    var single = arguments[0];
    return function(){
      if(!isNumber(arguments[0])) return undefined;
      return single + arguments[0];
    }
  }

  function isNumber(val){
    return typeof val === "number";
  }
}

module.exports = addTogether;

//addTogether(2,3);
