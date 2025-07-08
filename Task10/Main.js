import Customer from "./Customer.js";
import CreditCard from "./CreditCard.js";


const crdt=new CreditCard(1677871,"2029-12-25");
const cst=new Customer("Nasif","2002-03-21",crdt);
crdt.isValid();
cst.Purchase(2500);
crdt.makePurchase(2500);
crdt.AvailableCredit();
const crdt2=new CreditCard(2579871,"2026-03-12");


//cst.show();
//crdt.show();