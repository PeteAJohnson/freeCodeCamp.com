//https://www.freecodecamp.org/challenges/sum-all-primes

function sumPrimes(num) {
  
  var primeSum = 0;
  
  function isPrime(val) {
    for (i = 2; i < val; i++) {
      if (val % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (j = 2; j <= num; j++) {
    if (isPrime(j)) {
      primeSum += j;
    }
  }
  return primeSum;
}
sumPrimes(977);
