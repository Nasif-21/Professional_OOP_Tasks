export default class CarCheck {
  #carList = [];
  #carType;
  #carBrand;
  #carRegNo;
  #rentPrice;
  #rentPreiod;
  #isAvailable = true;
  #isMaintance = false;

  // Add a new car to the fleet
  addCar(carType, carBrand, carRegNo, rentPrice) {
    this.#carType = carType;
    this.#carBrand = carBrand;
    this.#carRegNo = carRegNo;
    this.#rentPrice = rentPrice;

    try {
      if (!this.#carType || !this.#carBrand || !this.#carRegNo || this.#rentPrice == null) {
        throw new Error("Information is missing, please check");
      }

      if (typeof this.#rentPrice !== "number") {
        throw new Error("Rent price must be a number");
      }

      const newCar = {
        carType: this.#carType,
        carBrand: this.#carBrand,
        carRegNo: this.#carRegNo,
        rentPrice: this.#rentPrice,
        isAvailable: this.#isAvailable,
        isMaintance: this.#isMaintance
      };

      this.#carList.push(newCar);

      console.log("----------Car Added---------------");
      console.log("Car Type: " + this.#carType);
      console.log("Car Brand: " + this.#carBrand);
      console.log("Car Registration No: " + this.#carRegNo);
      console.log("Car Rental price: " + this.#rentPrice);
      console.log("------------------------");

    } catch (err) {
      console.log("Error Occur: " + err.message);
    }
  }

  // Update the status of a car
  updateStatus(regNo, status) {
    const car = this.#carList.find(car => car.carRegNo === regNo);

    if (!car) {
      console.log(`Car with registration ${regNo} is not found`);
      return;
    }

    if (status === "available") {
      car.isAvailable = true;
      car.isMaintance = false;
    } else if (status === "maintance") {
      car.isAvailable = false;
      car.isMaintance = true;
    } else if (status === "rented") {
      car.isAvailable = false;
      car.isMaintance = false;
    } else {
      console.log("Invalid status input. Use: 'available', 'rented', or 'maintance'");
    }
  }

  // Show all cars
  showAllCar() {
    if (this.#carList.length === 0) {
      console.log("No cars found");
      return;
    }

    console.log("All cars from fleet");
    console.log("-------------------------");

    this.#carList.forEach((car, index) => {
      console.log(`Car ${index + 1}`);
      console.log(`Brand         : ${car.carBrand}`);
      console.log(`Type          : ${car.carType}`);
      console.log(`Registration  : ${car.carRegNo}`);
      console.log(`Rent Price    : ${car.rentPrice}`);
      console.log(`Availability  : ${car.isAvailable}`);
      console.log(`Maintance     : ${car.isMaintance}`);
      console.log("-------------------------");
    });
  }

  showRentList()
  {
  const rentCar=this.#carList.filter(car=>!car.isAvailable && !car.isMaintance);
  if(rentCar.length===0)
  {
    console.log("Sorry!, no cars available");
    return;
  }
  console.log("Rented Car");
  console.log("-----------------------")
  rentCar.forEach((car,index)=>{
      console.log(`Car ${index + 1}`);
      console.log(`Brand         : ${car.carBrand}`);
      console.log(`Type          : ${car.carType}`);
      console.log(`Registration  : ${car.carRegNo}`);
      console.log(`Rent Price    : ${car.rentPrice}`);

  });
  }
  showMaintanceList()
  {
    const mtnc=this.#carList.filter(car=>car.isMaintance);

    if(mtnc.length===0)
    {
        console.log("No Car under maintance");
        return;
    }
    console.log("Maintance Car");
  console.log("-----------------------")
    mtnc.forEach((car,index)=>
    {
    console.log(`Car ${index + 1}`);
      console.log(`Brand         : ${car.carBrand}`);
      console.log(`Type          : ${car.carType}`);
      console.log(`Registration  : ${car.carRegNo}`);
      console.log(`Rent Price    : ${car.rentPrice}`);
    });


  }
}
