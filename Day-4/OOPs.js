// oops means object orianted programing language

// object , class , Encapsulation , Abstraction , Inheritance , Polymorphism

// --------------classes--------------

// class ClassName {
//     constructor() {  }
//     method_1() {  }
//     method_2() {  }
//     method_3() {  }
//   }
// const createObj = new ClassName();           // we create an object with new keyword
//  createObj.method_2()                        // access

// --------example-------------

//   class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       const date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   const myCar = new Car("Ford", 2014);
//   myCar.age()

// // -----------Encapsulation-----------------

// // hiding the internal details of an object and exposing only the necessary information to the outside world.

// class bankDetails {
//     constructor(accountNumber, username, balance){
//         this.myAccountNumber = accountNumber
//         this.myUsername = username
//         this.myBalance = balance

//     }
//     showBankDetails(){
//         console.log(`Account Number: ${this.myAccountNumber}`);
// 		console.log(`Account Holder Name: ${this.myUsername}`);
// 		console.log(`Balance: ${this.myBalance}`);

//     }
//     deposite(amount){
//         this.myBalance += amount
//         this.showBankDetails()
//     }

//     withdraw(amount){
//         if (this.myBalance >= amount) {
//            this.myBalance -= amount
//            this.showBankDetails()

//         }else{
//             console.log("Insufficient Balance");
//         }

//     }

// }

// const myBankAccount = new bankDetails(123456,"jone",2000)
// myBankAccount.showBankDetails()
// myBankAccount.deposite(1000)
// myBankAccount.withdraw(2000)

// --------------Abstraction---------------------------

// hiding the inner complex workings of an object and exposing only the essential features to the user.

// ----------- inharitance ---------------------------

// we make multiple class and extande with parent class

// class parent {
//     constructor(car , modal){
//         this.Car = car
//         this.Modal = modal
//     }
//     car1(){
//         return 'i have a' + this.Car + this.Modal
//     }

// }

// class child extends parent {
//     constructor(car , modal, color){
//         super(car , modal)
//         this.Color = color
//     }
//     car2(){
//         return `i have a  ${this.Car}  ${this.Modal} color of my car is ${this.Color}`
//     }

// }

// const obj = new child("audi", "Q3", "red")
// console.log(obj.car2())

//------------------Polymorphism ----------------

// ---- Method Overriding ---------

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const dog = new Dog();
dog.speak();                   // dog and cat class overriding speak() 

const cat = new Cat();
cat.speak();



//--------------- Overloading -------------------

class Calculator {
    add(a, b) {
        if (b !== undefined) {
            return a + b; 
        }
        return a + a; 
    }
    add(a) {
      
            return a + a; 
        ; 
    }
}

const calc = new Calculator();
console.log(calc.add(5)); 
console.log(calc.add(2, 3));

//----------------------------------------------------------------------

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     get cnam() {
//       return this.carname;
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
//   }

//   const myCar = new Car("Ford");
//   console.log(myCar.cnam)

//-------

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

// Set an object property using a setter:
person.lang = "en";
