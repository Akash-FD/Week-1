
// rest oprator 

function hi(...arg){
    let sum = 0;
    for(let i of arg){
        sum = sum + i
    }
    return sum
}
console.log(hi(1,2,3,4,5))


// spread oprator

let a = [1,2,3]
let b = [4,5,6]

let c = [...a,...b]
console.log(c);
