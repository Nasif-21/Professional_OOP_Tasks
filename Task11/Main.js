import Car from "./CarClass.js";
import LicensePlate from "./LicensePlateClass.js";

const licensePlate = new LicensePlate("DHK-1234", "2022-01-01", "2026-12-31");
const car = new Car("Nasif", "Axio", "Toyota", "2008-12-12", licensePlate);

console.log("Car age:", car.carAge());
console.log("Eligible for renewal:", car.isEligibleForRenewal());
console.log("License plate still valid:", car.isLicensePlateValid());