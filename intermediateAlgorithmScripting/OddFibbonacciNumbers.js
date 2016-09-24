/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder*/

/**Solution by Prince O. Onyenike */


function sumFibs(num) {
  if(num <=0) return;
  var fibs = [1], sum = 0;

  for (var i = 0; i < fibs.length; i++) {
      if(fibs[i] <= num && fibs[i]%2){
        sum += fibs[i];
      }

      if(i===0){
        fibs.push(1)
      }else{
        fibs.push(fibs[i-1]+fibs[i]);
      }

      if(fibs[i] > num){break;}
  }

  return sum;
}

module.exports = sumFibs;

//sumFibs(1);