/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple*/

/**Solution by Prince O. Onyenike */


/*function smallestCommons(arr){
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);

  for (var i=min; i<max; i++) {
    if(i===min){
      grandLCM = lcm(i, i+1);
    }else{
      grandLCM = lcm(grandLCM, i+1);
    }
  }
  return grandLCM;
}

function lcm(a, b){
  return (a * b)/gcd(a, b);
}

function gcd(a, b){
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  var temp;

  while(min !== 0){
    temp = min;
    min = max % min;
    max = temp;
  }

  return max;
}

module.exports = smallestCommons;*/

//smallestCommons([1,5]);

// FRom FCC Git Solution.

function smallestCommons(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var grandLCM;

   for (var i=min; i<max; i++) {
      if(i===min){
        grandLCM = (i * (i+1))/gcd(i, i+1);
      }else{
        grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
      }
   }

  return grandLCM;

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);
