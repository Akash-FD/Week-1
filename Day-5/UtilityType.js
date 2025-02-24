"use strict";
// ---------------Parsial ---------------
// means optional
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
let myCar = {
    make: "Ford",
    model: "Focus",
    mileage: 12000, // `Required` forces mileage to be defined
};
// --------- Record --------------------------
const nameAge = {
    "dhaval": 24, // Record<string, number> is equivalent to { [key: string]: number }
    "mayur": 21
};
const bob = {
    myname: "ak",
    //  age:24            
};
const dow = {
    name: 'dow',
    age: 20
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
