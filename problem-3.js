'use strict'

console.time('time elapsed');

let n = 600851475143,
ints = [],
factors = [],
sqrtN = Math.floor(Math.sqrt(n));

for (let i = 2; i <= sqrtN; i++) {
  ints[i] = true;
}

for (let i = 2; i < ints.length; i++) {
  if (ints[i] == true && n % i == 0) {
    factors.push(i);
    for (let j = i*i; j < ints.length; j += i) {
      ints[j] = false;
    }
  }
}

console.log(factors[factors.length - 1]);
console.timeEnd('time elapsed');
