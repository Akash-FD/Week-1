"use strict";
// --------- union ---------------
function abc(a, b) {
    //console.log(a + b);    // error beacuse + (oprator) is not for string
    console.log(a);
    console.log(b);
}
abc(2, 3);
const stringArr2 = ["Hello", "how", "are", "you"]; // normal way
const mixedData2 = ["bye", true, 77]; // in array we give un-order type
// const myTuple: [string,  boolean, number] = ["hello", 143, false];     // in tuple we must give order way types
