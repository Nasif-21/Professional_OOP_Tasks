import  BankAccount  from "./task04.js";

const bankAcc=new BankAccount("Bank Account-01","BK-001",500);
const bankAcc2=new BankAccount("Bank Account-02","BK-002",680);
bankAcc.Deposit(500);
bankAcc.Withdraw(200);
bankAcc.Transfer(300,bankAcc2);