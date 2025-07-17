import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
  #basePrice=50;
  #color;
  constructor(brandName, model, yearOfManufacture,color) {
      super(brandName, model, yearOfManufacture); 
      this.#color=color;
      
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
getDetails() {
        return `${super.getDetails()} Color: ${this.#color}`;
    }
}
