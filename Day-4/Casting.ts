// ---------Casting with as-----------------

let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

// ------------Casting with <> ---------------

let a: unknown = 2;
console.log((<string>a));
console.log(typeof a)


// -----------Force casting -----------------

// let b = 'hello';
// console.log(((b as unknown) as number).length);     // x is not actually a number so this will return undefined