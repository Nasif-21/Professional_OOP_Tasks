import CarCheck from "./task06.js";

const cr=new CarCheck();
cr.addCar("Sedan","Toyota Corrola","DHAKA Metro GHA-67-8874",5000);
cr.addCar("Microbus","Toyota HIACE","SYLHET Metro CHA-35-3677",7000);
cr.addCar("Suv","Mitshubishi Pajero","Rangpur Metro DHA-78-6582",9000);
cr.addCar("Bus","Hundai Universe","DHAKA Metro GHA-33-3435",15000);
cr.updateStatus("DHAKA Metro GHA-67-8874","rented");       //Corrola
cr.updateStatus("Rangpur Metro DHA-78-6582","maintance");  //HIACE
cr.updateStatus("SYLHET Metro CHA-35-3677","available");   //Pajero
cr.updateStatus("DHAKA Metro GHA-33-3435","rented");    //Univrse
cr.showAllCar();
cr.showMaintanceList();
cr.showRentList();