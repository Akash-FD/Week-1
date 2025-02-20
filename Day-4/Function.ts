// ------------ return type --------

function sum(): number {
  // return type is number
  return 5 + 10;
}
console.log(sum());

// ------- Void Return Type ------------

function printHello(z: number): void {
  // void indicate no return value in function
  console.log(z);
}
console.log(printHello(5));

//-------- with parameter -----------

function multiply(a: number, b: number) {
  return a * b; // If no parameter type is defined, TypeScript will default to using any,
}
multiply(5, 10);

//--------Optional parameter ------------

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
add(5, 10, 20);

// ---------- default parameter ---------------

function pow(a: number, b: number = 10) {
  return a ** b;
}

// --------------Named Parameters---------------

function divide({ one, two }: { one: number; two: number }) {
  return one + two;
}


//------------------Rest Parameters------------

function rest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((total, value) => total + value);
  }