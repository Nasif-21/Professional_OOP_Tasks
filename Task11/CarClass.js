import LicensePlate from "./LicensePlateClass.js";

export default class Car {
  #carOwnerName;
  #model;
  #manufacturer;
  #yearofManufacture;
  #licensePlate;

  static #regplateNo = new Set();

  constructor(carOwnerName, model, manufacturer, yearOfManufacture, licensePlate) {
    try {
      if (!carOwnerName || !model || !manufacturer || !yearOfManufacture) {
        throw new Error("Fields cannot be null");
      }

      if (typeof carOwnerName !== "string") throw new Error("Car owner name must be string");
      if (typeof model !== "string") throw new Error("Car model name must be string");
      if (typeof manufacturer !== "string") throw new Error("Car manufacturer name must be string");

      if (typeof yearOfManufacture === "string") {
        yearOfManufacture = new Date(yearOfManufacture);
      }

      if (!(yearOfManufacture instanceof Date) || isNaN(yearOfManufacture)) {
        throw new Error("Car manufacture year must be a valid Date");
      }

      if (!(licensePlate instanceof LicensePlate)) {
        throw new Error("LicensePlate object expected");
      }

      const unqPlateno = licensePlate.getPlateNo();

      if (Car.#regplateNo.has(unqPlateno)) {
        throw new Error("License Plate already registered");
      }

      Car.#regplateNo.add(unqPlateno);

      this.#carOwnerName = carOwnerName;
      this.#model = model;
      this.#manufacturer = manufacturer;
      this.#yearofManufacture = yearOfManufacture;
      this.#licensePlate = licensePlate;

      this.showCarDetails();
    } catch (error) {
      console.log("Car Error: " + error.message);
    }
  }

  carAge() {
    const now = new Date();
    return now.getFullYear() - this.#yearofManufacture.getFullYear();
  }

  isEligibleForRenewal() {
    return this.carAge() <= 20;
  }

  isLicensePlateValid() {
    return this.#licensePlate.isValid();
  }

  showCarDetails() {
    console.log(`Name: ${this.#carOwnerName}`);
    console.log(`Model: ${this.#model}`);
    console.log(`Manufacturer: ${this.#manufacturer}`);
    console.log(`Year of Manufacture: ${this.#yearofManufacture.getFullYear()}`);
    console.log(`License Plate No: ${this.#licensePlate.getPlateNo()}`);
    console.log(`Registration Date: ${this.#licensePlate.getRegistrationDate().toDateString()}`);
    console.log(`Expiration Date: ${this.#licensePlate.getExpireDate().toDateString()}`);
    console.log(`Car Age: ${this.carAge()} years`);
    console.log(`Eligible for Renewal: ${this.isEligibleForRenewal() ? "Yes" : "No"}`);
    console.log(`License Plate Valid: ${this.isLicensePlateValid() ? "Yes" : "Expired"}`);
  }
}
