/*No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp*/

/**Solution by Prince O. Onyenike */


function permAlone(str) {
  str = str.split("").sort().join("");
  if(str.length !== 1 && str[0] === str[str.length-1]){return 0;}
  if(str.length === 1){return 1;}

  var strGroups = str.match(/([a-z])\1*/g);
  var sumToSubtract = 0;
  var prodToAdd = 1;

  for (var i = 0; i < strGroups.length; i++) {
    if(strGroups[i].length > 1){
      sumToSubtract += matchNumberFactor(strGroups[i][0], strGroups[i].length, str);
    }
  }

  var multiXterRepeats = strGroups.filter(function(element){
    return element.length > 1;
  });

  if(multiXterRepeats && multiXterRepeats.length > 1){
    for(var j=0; j<multiXterRepeats.length; j++){
        prodToAdd *= factorial(multiXterRepeats[j].length);
    }

   //prodToAdd *= factorial(str.length - multiXterRepeats.length);
   prodToAdd *= factorial(multiXterRepeats.length);
  }

  // if(prodToAdd > 1){
  //   prodToAdd *= factorial(strGroups.length);
  // }

  var result = factorial(str.length) - sumToSubtract;
  if(prodToAdd > 1){
    result += prodToAdd;
  }

  return result;

}


function matchNumberFactor(xter, matchNum, str){
  var sum = 0;
  while (matchNum > 1) {
    sum += factorial((str.length - matchNum + 1)) * factorial(matchNum);
    matchNum--;
  }

  return sum;
}

function factorial(num){
  if(num <= 0) return 1;
  return num * factorial(num - 1);
}

var test = permAlone("aaabb") //12
//var test = permAlone("aab"); // 2
//var test = permAlone("aabb"); //8
console.log(test);