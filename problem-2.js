'use strict'

console.time('time elapsed');

let x = 2, y = 0, f = 0;
let result = 2;

while(result < 4e6) {
  f = 4 * x + y;
  y = x;
  x = f;
  result += f;
}

console.log(result);
console.timeEnd('time elapsed');
