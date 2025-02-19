// -------special type of ts----------------------

// # Any type

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// # Type: unknown
// unknown is a similar, but safer alternative to any.

// #Type: never
// never effectively throws an error whenever it is defined.
