'use strict';

console.time('time elapsed');

function SumDivisbleBy(n, p) {
  let N = parseInt(p/n);
  return n*(N)*((N)+1)/2;
}

console.log(SumDivisbleBy(3,999) + SumDivisbleBy(5,999) - SumDivisbleBy(15,999));
console.timeEnd('time elapsed');
