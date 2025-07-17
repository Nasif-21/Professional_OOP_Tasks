import Car from "./Car.js";
import Bike from "./Bike.js";
import Truck from "./Truck.js";


try {
    const cars=new Car("Toyota","Axio",2015);
    const bikes=new Bike("Bajaj","Pulsar",2021);
    const trucks=new Truck("Scania","ST Legend",2020);
    console.log("Car Price")
    console.log("-".repeat(10));
    console.log(`The rent Price for ${cars.getDetails()} for 5 days is ${cars._calculatePrice(5)} `);
    console.log("");
    console.log("Bike Price")
    console.log("-".repeat(10));
    console.log(`The rent Price for ${bikes.getDetails()} for 9 days is ${bikes._calculatePrice(9)} `);
    console.log("");
    console.log("Truck Price")
    console.log("-".repeat(10));
    console.log(`The rent Price for ${trucks.getDetails()} for 6 days is ${trucks._calculatePrice(6)} `);
    
    
} catch (error) {
    console.log("Error Message :"+error.message);
    
}




