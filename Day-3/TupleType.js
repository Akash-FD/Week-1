"use strict";
//------------------tuple--------------------
// #-------------- with correct order------------
// define our tuple
let ourTuple = [5, false, 'Coding God was here']; // we can give further value and no need to assign any type
//initialize correctly
// #-----with incorrect order-------------------------
// define our tuple
// let ourTuple: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// #-------- Readonly-tuple --------------
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
// #---------------Named Tuples------------
const graph = [55.2, 41.3];
