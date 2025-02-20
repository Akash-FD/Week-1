"use strict";
// ---------Casting with as-----------------
let x = 'hello';
console.log(x.length);
let y = 4;
console.log(y.length); // prints undefined since numbers don't have a length
// ------------Casting with <> ---------------
let a = 2;
console.log(a);
console.log(typeof a);
// -----------Force casting -----------------
// let b = 'hello';
// console.log(((b as unknown) as number).length);     // x is not actually a number so this will return undefined
