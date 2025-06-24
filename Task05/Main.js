import CreditCard from "./creditCardClass.js";
import { testBillPayment,testWithdraw } from "./TestCase.js";


const crdtCard=new CreditCard("Jhon Price","2501-5567-9688","VISA");
crdtCard.Withdraw(8740);
crdtCard.BillPayment(25000);


testBillPayment("", "2501-5567-9688", "VISA", 100000);
testBillPayment("John Price", "2501-5567-9688", "VISA", 600000);

testWithdraw("John", "9999-1111-2222", "MasterCard", 25000);    
testWithdraw(" ", "9999-1111-2222", "MasterCard", 5000);        
testWithdraw("Sarah", "9999-1111-2222", " ", 5000);             
testWithdraw("Mike", "9999-1111-2222", "VISA", -1000);  


