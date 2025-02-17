// function

// function are reuseable block of code to perform some perticular task

// --------normal function-------------

//  function hello(){               // function declaration
//     return console.log("hyy");   // when you return any thing that stop the excucation of further code
//            console.log("hiiiiiiii");

//  }

//  hello();                         // call the function

// -------- Anonymous function -----------

// let obj = function(x){                    // without giving function name
//     return console.log(x*x);              // we can store function in variable

// }
// obj(10)

//------------- Arrow function ----------

// const myfunction = (x, y) => console.log(x+y);
// const myfunction2 = (x, y) => { return console.log(x+y) }

// myfunction(5,10)
// myfunction2(10,20)

// --------- callback function--------

// callback function is a function that passed as an argument to another function

// function callback(x){
//     console.log(x);
// }

// function first(){
//     callback("i am first")
// }

// function second(){
//     console.log("i am second");
// }

// first()
// second()

// for (var a = 0; a<=10; a++){
//     setTimeout(()=>console.log(a),1000)
// }

// const abc = setInterval(myGreeting, 1000);
// function myGreeting() {
//     console.log("hello");
    
// }


// function myStopFunction() {
//   clearTimeout(abc);
// }
