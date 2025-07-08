export default class LicensePlate {
  #plateNumber;
  #registrationDate;
  #expireDate;

  constructor(plateNumber, registrationDate, expireDate) {
    try {
      if (!plateNumber || !registrationDate || !expireDate) {
        throw new Error("All fields must be provided");
      }

      this.#plateNumber = plateNumber;
      this.#registrationDate = new Date(registrationDate);
      this.#expireDate = new Date(expireDate);

      if (isNaN(this.#registrationDate) || isNaN(this.#expireDate)) {
        throw new Error("Invalid registration or expiration date");
      }

      if (this.#expireDate <= this.#registrationDate) {
        throw new Error("Expiration date must be after registration date");
      }
    } catch (error) {
      console.log("LicensePlate Error: " + error.message);
    }
  }

  getPlateNo() {
    return this.#plateNumber;
  }

  getRegistrationDate() {
    return this.#registrationDate;
  }

  getExpireDate() {
    return this.#expireDate;
  }

  isValid() {
    const now = new Date();
    return now <= this.#expireDate;
  }
}
