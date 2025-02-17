class car {
    constructor(name,year){
        this.name = name;
        this.year = year;

    }
    age(){
        let date = new Date()
        return date.getFullYear() - this.year;

    }
}

const myCar = new car("bmw",2015)

console.log(myCar.name);
console.log(myCar.year);
console.log(myCar.age());


