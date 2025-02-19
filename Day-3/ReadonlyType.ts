//-------------Readonly -------------------------------
// # we can not change beacuse Readonly
const Readonlynames: readonly string[] =["akash"]
// Readonlynames.push("kkkkkk")                              //error




//------infer------------
const number =[1,2,3]       // inferance try to convert number : number[]
number.push(4)
