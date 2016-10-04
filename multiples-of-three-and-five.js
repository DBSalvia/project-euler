'use strict';

function sumOfMultiplesOfThreeAndFive(n) {
  let sum = 0;
  n -= 1;
  while(n >= 0) {
    if(n%3 == 0 || n%5 == 0) {
      console.log(n);
      sum += n;
    }
    --n;
  }
  return sum;
}
