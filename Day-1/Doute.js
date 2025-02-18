// Object are not compare by their value in == and === it is compare by thire refrence not structure



// let obj1 = {a:1}
// let obj2 = {a:1}
// let obj3 = obj1
// obj3.b = 1
// console.log(obj1);
// console.log(obj3);



// console.log(obj1 === obj3);
let a = 0.3
let b = 0.1 + 0.2
console.log(a == b );       // false

console.log(Math.round(a) === Math.round(b)); // true




// function deepEqual(obj1, obj2) {
//     if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  
    //  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) return false;
  
    // const keys1 = Object.keys(obj1);
    // const keys2 = Object.keys(obj2);
  
    // if (keys1.length !== keys2.length) return false;
  
    // for (const key of keys1) {
    //   if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    // }
  
    // return true;
  //}
  
//  console.log(deepEqual(obj1, obj2)); // true






// console.log(JSON.stringify(a) === JSON.stringify(b))
// console.log(a == b);
// console.log(a === b);


// let str = "abcde"
// str. = "xyz"
// console.log(str);


// let str = "abcde"
// str[1] = "h"
// console.log(str);

// function xyz(obj1, obj2){
//     if(obj1 === obj2){
//         console.log("compare");
        
//     }else{
//         console.log("not");
        
//     }

// }
// xyz({a:1},{a:1})

// console.log(true - false + 1);


