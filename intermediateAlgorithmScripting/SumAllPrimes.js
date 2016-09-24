/*Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()*/

/**Solution by Prince O. Onyenike */


function sumPrimes(num) {
  sum = 0;
  for (var i = 2; i<=num; i++) {
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

function isPrime(num){
  var prime = true;
  if(num === 2 || num === 3) return true;
  if(num % 2 === 0) return false;
  for(var i=2; i<= Math.sqrt(num); i++){
    if(num % i === 0){
      prime = false; break;
    }
  }

  return prime;
}

module.exports = sumPrimes;
//sumPrimes(10);
