// -------- # promise ----------

// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

// const promise = new Promise ((res,rej)=>{})

// promise.then(()=>{})

//  const promise = new Promise((resolve, reject)=>{
//    setTimeout(() => {
//     resolve("sucsses")
//    }, 1000);
//  })

//  promise.then((x)=>{
//     console.log(x);

//  })

// -----------------------

// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// const promise = new Promise((resolve, reject) => {

//     resolve("sucsses");

// });

// promise.then((x) => {
//   console.log(x);
// });
// console.log("End");

// ---------- Promise.all ------------------if all promise resolve try{} code will run

// let first_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved First after 1 second");
//   }, 1000);
// });

// let second_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved First after 2 seconds");
//   }, 2000);
// });

// let third_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("somthing went wrong");
//   }, 3000);
// });

// try {
//   let result = Promise.all([first_promise, second_promise, third_promise]);
//   result.then((data) => console.log(data));
// } catch (error) {
//   console.log(error);
// }

// ----------------promise.allsettled------------it return an array of promise with details

// let first_promise = Promise.resolve(200);

// let second_promise = Promise.reject("Rejected Promise");

// let third_promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(500), 100)
// });

// let result =
//     Promise.allSettled([first_promise, second_promise, third_promise]);
// result.then((value) => console.log(value));

// ------------------Promise.race()----------it give first time vise resolve promise

// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500)),
// ]).then((result) => console.log(result));

//--------------Promise.any()-----------------------it give first code vise resolve promise

// Promise.any([
//   Promise.reject("Task 1 failed"),
//   Promise.resolve("Task 2 completed"),
//   Promise.resolve("Task 3 completed"),
// ])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
