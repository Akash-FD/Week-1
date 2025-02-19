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
// -------special type of ts----------------------
// # Any type
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type
// # Type: unknown
// unknown is a similar, but safer alternative to any.
// #Type: never
// never effectively throws an error whenever it is defined.
// ----------TypeScript Arrays ---------------------
// const names: string[] =[];
// names.push("akash")
// names.push("3")
// console.log(names);
//-------------Readonly -------------------------------
// # we can not change beacuse Readonly
// const names: readonly string[] =["akash"]
// names.push("kkkkkk")                              //error
//------infer------------
// const number =[1,2,3]       // inferance try to convert number : number[]
// number.push(4)
//------------------tuple--------------------
// #-- with correct order---
// define our tuple
// let ourTuple: [number, boolean, string];      // we can give further value and no need to assign any type
// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// #-----with incorrect order------
// define our tuple
// let ourTuple: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// #-------- Readonly-tuple --------------
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
// #---------------Named Tuples------------
// const graph: [x: number, y: number] = [55.2, 41.3];
// #-----------object-----------------------------------------------------
// const obj : { car:string, modal:number, color:string }= {
//     car:"ford",
//     modal:2019,
//     color:"red"
// }
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;
// const car: { type: string, mileage?: number } = { // no error beacuse ?.
//   type: "Toyota",
// };
// car.mileage = 2000;
// -------------index signeture -------------------
// const age: { [index: string]:number } = {}
// age.myage = 20            // no-error
// age.hisage = "20"        // error
// ------------Type Aliases and Interfaces------------
// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = {
//   year: number;
//   type: string;
//   model: string;
// };
// const car1: Car = {
//   year: 2018,
//   type: "ford",
//   model: "mustang",
// };
// const car2: Car = {
//   year: 2019,
//   type: "audi",
//   model: "Q3",
// };
// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };
//----------- interface --- only applicabale on object------
// interface Rectangle {
//   height: number;
//   width: number;
// }
// const rectangle: Rectangle = {         // we can extend also 
//   height: 20,                          // interface next extends previous { color : string }
//   width: 10, 
// };
// --------- union ---------------
//  function abc(a: string|number , b: string|number){
//   //console.log(a + b);    // error beacuse + (oprator) is not for string
//     console.log(a);
//     console.log(b);
// }
// abc(2,3)
// const stringArr2: string[] = ["Hello", "how", "are", "you"];          // normal way
// const mixedData2: (string | number | boolean )[] = ["bye", true, 77];  // in array we give un-order type
// const myTuple: [string,  boolean, number] = ["hello", 143, false];     // in tuple we must give order way types
