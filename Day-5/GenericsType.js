"use strict";
// --------------Generics with function---------------
// function myfunction<s, t>(a:s, b:t): number{
//     return a+b
// }
//  console.log(myfunction<number, number>(1,1));
function myfunction(a, b) {
    return [a, b];
}
console.log(myfunction("ak", 1));
const b = { value: 10 }; // actual variable
// ------------generic with classes------------
class myclass {
    constructor(username) {
        this.user = username;
    }
    method1() {
        return `my self ${this.user}`;
    }
}
const myobj = new myclass("ak");
console.log(myobj.method1());
// -----------------Extends-----------------
function myfun(v1, v2) {
    return [v1, v2];
}
console.log(myfun("ak", 1));
