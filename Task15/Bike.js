import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
   #basePrice=15;
   #engineCapacity;
   constructor(brandName, model, yearOfManufacture,engineCapacity) {
      super(brandName, model, yearOfManufacture); 
      this.#engineCapacity=engineCapacity;
}
_calculatePrice(days)
{
let pricePerDay=this.#basePrice;
if(days>7)
{
  pricePerDay=pricePerDay*0.85;
}
return pricePerDay*days;
}
 getDetails() {
        return `${super.getDetails()} Engine: ${this.#engineCapacity}cc`;
    }
}
