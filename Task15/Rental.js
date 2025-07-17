import Vehicle from "./Vehicle.js";
import Customer from "./Customer.js";

export default class Rental
{
    #customer;
    #vehicle;
    #days;
    constructor(customer,vehicle,days)
    {
        if(!(customer instanceof Customer) ||!(vehicle instanceof Vehicle))
        {
            throw new Error("Invalid instance check");
        }
        if (typeof days !== "number" || days <= 0) {
            throw new Error("Days must be a positive number");
        }
        this.#customer=customer;
        this.#vehicle=vehicle;
        this.#days=days;


        customer.addRental(this);

    }
    getVehicle() { return this.#vehicle; }
    getDays() { return this.#days; }
}