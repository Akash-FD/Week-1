"use strict";
console.log("hello world");
let username = "Akash";
let surname = "patel";
console.log(username + surname);
console.log(1 + 2 == 3);
//--- noImplicitAny ---
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
//--- noImplicitAny -----
