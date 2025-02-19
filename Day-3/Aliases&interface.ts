// ------------Type Aliases and Interfaces------------

type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: number;
  type: string;
  model: string;
};

const car1: Car = {
  year: 2018,
  type: "ford",
  model: "mustang",
};

const car2: Car = {
  year: 2019,
  type: "audi",
  model: "Q3",
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

//----------- interface --- only applicabale on object------

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {         // we can extend also 
  height: 20,                          // interface next extends previous { color : string }
  width: 10, 
};