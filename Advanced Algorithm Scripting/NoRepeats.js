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

  //Get array of repeated character set
  var multiXterRepeats = strGroups.filter(function(element){
    return element.length > 1;
  });

  if(multiXterRepeats && multiXterRepeats.length > 1){
    for(var j=0; j<multiXterRepeats.length; j++){
        prodToAdd *= factorial(multiXterRepeats[j].length);
    }

   var maxLength  = multiXterRepeats.sort(function (a, b) { return b.length - a.length; })[0].length;
   if(maxLength == 2){
         prodToAdd *= factorial(str.length - multiXterRepeats.length);
   }else{
       prodToAdd *= factorial(multiXterRepeats.length);
   }

  }

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

module.exports = permAlone;

//permAlone('aab');