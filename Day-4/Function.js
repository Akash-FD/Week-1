"use strict";
// ------------ return type --------
function sum() {
    // return type is number
    return 5 + 10;
}
console.log(sum());
// ------- Void Return Type ------------
function printHello(z) {
    // void indicate no return value in function
    console.log(z);
}
console.log(printHello(5));
//-------- with parameter -----------
function multiply(a, b) {
    return a * b; // If no parameter type is defined, TypeScript will default to using any,
}
multiply(5, 10);
//--------Optional parameter ------------
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
add(5, 10, 20);
// ---------- default parameter ---------------
function pow(a, b = 10) {
    return a ** b;
}
// --------------Named Parameters---------------
function divide({ one, two }) {
    return one + two;
}
//------------------Rest Parameters------------
function rest(a, b, ...rest) {
    return a + b + rest.reduce((total, value) => total + value);
}
