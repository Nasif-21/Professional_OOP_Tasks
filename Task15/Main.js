import Car from "./Car.js";
import Bike from "./Bike.js";
import Truck from "./Truck.js";
import Customer from "./Customer.js";
import Rental from "./Rental.js";

try {
    const car = new Car("Toyota", "Axio", 2015, "Black");
    const bike = new Bike("Bajaj", "Pulsar", 2021, 150);
    const truck = new Truck("Scania", "ST Legend", 2020, 12);

    const customer1 = new Customer("Nasif", "01712345678");
    const customer2=new Customer("Mysara","01912345679");

    
    const rental1 = new Rental(customer1, car, 5);
    const rental2 = new Rental(customer1, bike, 9);
    const rental3=new Rental(customer2,truck,14);

    console.log("Customer rental history:");
    console.log(customer1.getRentalHistory());
     console.log(customer2.getRentalHistory());

    console.log("\nIndividual rental prices:");
    console.log(`Car price: ${rental1.getVehicle().calculatePrice(rental1.getDays())}`);
    console.log(`Bike price: ${rental2.getVehicle().calculatePrice(rental2.getDays())}`);
     console.log(`Bike price: ${rental3.getVehicle().calculatePrice(rental2.getDays())}`);

} catch (error) {
    console.log("Error Message: " + error.message);
}
