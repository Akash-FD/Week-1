// console.log(Number(NaN));
// console.log( typeof NaN === typeof NaN);

// console.log(null == undefined);

// console.log(2 && 1 && [] && {})    // return {}
//                                    // if all true value it give last value
// console.log(2 && null && [] && {})  // return null
//                                     // if any falsy value is their it give fasly value

// console.log( 0 || null || undefined || 1 || false); //return 1
//                                                     // it return first truly
// console.log( 0 || null || undefined || false);      //if no any true value is their it give last value

// -------------------------------------------------------------

// (function(){
//     // b = 3
//     // var a
//     var a = b = 3;   // this code achually means that above commented code
//   })();

//   console.log(a);
//   console.log(b);

//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));

// ---------------------------------------------------------------

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// ---------------------------------------------------------

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return                              // afer return we can not go second line so function does not run after return line
// {
//       bar: "hello"
//   };
// }

// console.log(foo1());      // {bar : hello}
// console.log(foo2());      // undefine

//---------------------------------------------------------------

// console.log(0.1 + 0.2 == 0.3);
// console.log(Math.round(0.1 + 0.2) == Math.round(0.3));      // 0.3 pachal ni value pan hoy che aetle exact same na aave to make == true we can use math.round

// ----------------------------------------------------------------

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// output = 1 4 3 2                  // event-loop consept

// ----------------------------------------------------------

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement("button");
//     btn.appendChild(document.createTextNode("Button " + i));
//     btn.addEventListener("click", function () {
//       console.log(i);
//     });
//     document.body.appendChild(btn);
//   }

//--------------------------------------------------------------

// var x = 21;
// var girl = function () {
//     console.log(x);                 // undefine  why beacuse var x present in scope so
//     var x = 20;                     // var x = 20; na hoy to 21 return kare
// };
// girl ();

// ----------------------------------------------------------------

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);                              // var print 5 5 5 5 5
// }, i * 1000 );                                   // with let 0 1 2 3 4
// }

// -------

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() {               // with var 0 1 2 3 4
//             console.log(x);
//          }, x * 1000 );
//     })(i);
// }

//-----------------------------------------------------------------

// var b = [undefined];
// b[2] = 2;
// console.log(b);             // (3) [undefined, empty × 1, 2]
// console.log(b.map(e => e*7));

//------------------------------------------------------------
// https://www.toptal.com/javascript/interview-questions
//---------------------------------------------------------

// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)          // output will 3
//     }
//     inner();
// }
// outer();

// --------------------------------------------------------

// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         age: 30
//     }
// };

// var objclone = Object.assign({},obj);
// console.log('objclone: ', objclone);

// obj.c.age = 45;
// console.log('After Change - obj: ', obj);           // 45 - This also changes
// console.log('After Change - objclone: ', objclone); // 45

//--------------------------------------------------------

// let x = [1,2];
// let y = [3,4];
// let z = x + y;
// console.log(z);

// console.log(typeof z); // string

//----------------------------------------

// const arr = [1, 2, 3];
// arr.forEach((num) => {return num * 2});

// console.log(arr);        // [1,2,3] foreach does not modifiy original array

// -------------------------------------

// const promise = new Promise((resolve,reject) => {
//   resolve(1);
//   reject()
  
// });

// promise
//   .then((value) => {
//     console.log(value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
//     throw new Error("Something went wrong");
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//-----------------------------------------------------

