import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {
  #basePrice=100;
  #maintancePrice=100;
  constructor(brandName, model, yearOfManufacture) {
      super(brandName, model, yearOfManufacture); 
}
_calculatePrice(days)
{
return (this.#basePrice+this.#maintancePrice)*days; 
}
}
