import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
   #basePrice=15;
   constructor(brandName, model, yearOfManufacture) {
      super(brandName, model, yearOfManufacture); 
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
}
