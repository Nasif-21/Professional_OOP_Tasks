import Vehicle from "./Vehicle.js";

export default class Customer
{
    #customerName;
    #customerPhone;
    #rentals=[];

    constructor(customerName,customerPhone)
    {
        if(!customerName ||!customerPhone)
        {
            throw new Error("Customer Name and phone cannot be empty");
        }
        if(typeof customerName!=="string" || typeof customerPhone!=="string")
        {
            throw new Error("Invalid Customer name and phone number type");
        }
         if (customerPhone.length !== 11 || !/^\d+$/.test(customerPhone)) {
         throw new Error("Invalid Phone number: must be 11 digits");
      }
        this.#customerName=customerName;
        this.#customerPhone=customerPhone;
        
    }
    getCustomerName()
    {
        return this.#customerName;

    }
    getCustomerPhoneNumber()
    {
        return this.#customerPhone;
    }
    getCustomerDetails()
    {
        return `${this.#customerName} ${this.#customerPhone}` 
    }
    addRental(rental)
    {
        this.#rentals.push(rental);
    }
    getRentals()
    {
        return this.#rentals;
    }
    getRentalHistory()
    {
        if(this.#rentals.length===0)
        {
         return `${this.getCustomerName()} has no rental`;   
        }
        return this.#rentals.map((rental, index) =>
            `${index + 1}. Rented ${rental.getVehicle().getDetails()} for ${rental.getDays()} days.`
        ).join('\n');
    }

}