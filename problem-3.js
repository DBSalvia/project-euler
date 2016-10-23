'use strict'

console.time('time elapsed');

function sievePrimes(n) {
  let ints = [],
  primes = [],
  sqrtN = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrtN; i++) {
    ints[i] = true;
  }

  for (let i = 2; i < ints.length; i++) {
    if (ints[i] == true) {
      primes.push(i);
      for (let j = i*i; j < ints.length; j += i) {
        ints[j] = false;
      }
    }
  }
  return primes;
}

let n = 600851475143,
primes = [],
factors = [];

primes = sievePrimes(n);

for (let i = 0; i < primes.length; i++) {
  if (n % primes[i] == 0) {
    factors.push(primes[i]);
    n = n/primes[i];
  }
}

console.log(factors[factors.length - 1]);
console.timeEnd('time elapsed');
