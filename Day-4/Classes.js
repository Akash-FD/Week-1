"use strict";
// ----------------Classes --------------

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  di() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  }
}
class ElectricCar extends Car {
  constructor(make, model, year, batteryLife) {
    super(make, model, year);
    this.batteryLife = batteryLife;
  }
  d() {
    console.log(`Battery life: ${this.batteryLife} hours`);
  }
}
let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.di();
tesla.d();
