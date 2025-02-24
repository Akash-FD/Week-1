// ---------------Parsial ---------------
// means optional

interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// --------------Required-------------------

// required means all keys are Required

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};


// --------- Record --------------------------
 
const nameAge: Record<string , number> = {
    "dhaval":24,                                     // Record<string, number> is equivalent to { [key: string]: number }
    "mayur":21
}


// ------------------Omit-------------------------

// omit means we can remove some key from interface 

 interface perosn {
     myname : string,
     age : number,
     location?: string
 }

 const bob: Omit<perosn,'age' | 'location'> ={
    myname:"ak",
  //  age:24            
 }

 
 //------------Pick -------------------

 // means pick any of this

 interface person1 {
    name: string;
    age: number;
    location?: string;
  }
  
  const dow: Pick<person1, 'name' | 'age'> = {     // only name we can make 
    name: 'dow',
    age: 20
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };

