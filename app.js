// OO Challenge

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model,year, numWheels){
        super(make, model, year);
        this.numWheels = 4;
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model,year, numWheels){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        if(!Number.isFinite(capacity) || capacity<= 0){
            throw new Error("Must add a positive capacity!")
        }
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            return "Only vehicles are allowed here!";
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full!";
        }
            this.vehicles.push(vehicle);
            return "Vehicle added!"
    }
}
// Part Four


// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, 
// and a property called capacity which is a number indicating how many vehicles will fit in the garage. 
// When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. 
// However, if you try to add something which is not a vehicle, the garage should return the message 
// “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

// let garage = new Garage(2);
// garage.vehicles; // []
// garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// garage.add("Taco"); // "Only vehicles are allowed in here!"

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// // "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// // "Sorry, we're full."