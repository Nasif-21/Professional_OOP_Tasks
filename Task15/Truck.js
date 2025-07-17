import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {
  #basePrice=100;
  #maintancePrice=100;
  #loadCapacity;
  constructor(brandName, model, yearOfManufacture,loadCapacity) {
      super(brandName, model, yearOfManufacture); 
      this.#loadCapacity=loadCapacity;
}
_calculatePrice(days)
{
return (this.#basePrice+this.#maintancePrice)*days; 
}
   getDetails() {
        return `${super.getDetails()} Load: ${this.#loadCapacity} tons`;
    }
}
