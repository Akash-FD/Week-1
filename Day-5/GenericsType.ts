// --------------Generics with function---------------

// function myfunction<s, t>(a:s, b:t): number{
//     return a+b
// }
//  console.log(myfunction<number, number>(1,1));

function myfunction<s, t>(a: s, b: t): [s, t] {
  return [a, b];
}
console.log(myfunction<string, number>("ak", 1));



//------------Type Aliases ----------------

type a<T> = { value: T };                    //we first make blueprint of variable

const b: a<number> = { value: 10 };         // actual variable


// ------------generic with classes------------

 
  class myclass<t>{                   // when you want to give default value give class myclass<t = string> 
     public user: t 

    constructor(username: t){
        this.user = username

    }

    method1(){
        return `my self ${this.user}`

    }
  }

  const myobj = new myclass<string>("ak")
console.log(myobj.method1())


// -----------------Extends-----------------

function myfun<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }

  console.log(myfun<string, number>("ak", 1));
