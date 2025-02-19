// #-----------object-----------------------------------------------------

const obj : { car:string, modal:number, color:string }= {
    car:"ford",
    modal:2019,
    color:"red"
}

// const car: { type: string, mileage: number } = {             // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;

const cars: { type: string, mileage?: number } = {                // no error beacuse ?.
  type: "Toyota",
};
cars.mileage = 2000;  



// -------------index signeture -------------------

const age: { [index: string]:number } = {}
age.myage = 20                                  // no-error
// age.hisage = "20"                           // error
