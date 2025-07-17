import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
  #basePrice=50;
  constructor(brandName, model, yearOfManufacture) {
      super(brandName, model, yearOfManufacture); 
      
}
_calculatePrice(days)
{
const currentYear=new Date().getFullYear();
let pricePerDay=this.#basePrice;
if(currentYear-this.getYearOfManufacture()>5)
{
  pricePerDay=pricePerDay*0.9;
}
return pricePerDay*days;
}
}
