/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()*/

function steamrollArray(arr) {
  var result = [];

  return roll(arr);

  function roll(arr){
     arr.forEach(function(element){
    if(Array.isArray(element)){
      roll(element);
    }else{
      result.push(element);
    }
  });

  return result;
  }
}

module.exports = steamrollArray;

//steamrollArray([1, [2], [3, [[4]]]]);