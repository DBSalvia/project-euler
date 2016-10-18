'use strict'

console.time('time elapsed');

// n = some number

// find all primes < n

// foreach prime as p
  // is p % x == 0
  // results.push(p)

// return max(results);

function findPrimeFactors(n) {
  let primes = primeSieve(n);
  let results = [];
  for(let p of primes) {
    if(n % p == 0) {
      results.push(p);
    }
  }
  return results;
}

function generatePrimes(n) {
  let p = 2,
  ints = [],
  primes = [];
  // Generate list of consecutive integers
  for (let i = p; i < n; i++) {
    ints[i] = true;
  }

  while (true) {
    if(p*p > n) break;
    mark(p*p);
    let nextP = findNextP(p);
    if(nextP == 0) break;
    p = nextP;
  //  primes.push(p);
  }

  for(let i = 2; i < n; i++) {
    if(ints[i] == true) primes.push(i);
  }

  return ints;

  // mark 2p onwards to n
  function mark(p) {
    ints[p] = false;
    let i = p;
    p = Math.sqrt(p);
    while (i < n) {
      ints[i+p] = false;
      i += p;
    }
  }

  // find the first number greater than p that == false
  // number > p? p = number
  // else stop
  function findNextP(p) {
    let j = p;
    let next = 0;
    while (j < n) {
      if(j > p && ints[j] == true) {
        next = j;
        break;
      }
      j++;
    }
    return next;
  }
}

console.log(generatePrimes(60085147514))
//console.log(findPrimeFactors(60085147514));
console.timeEnd('time elapsed');
