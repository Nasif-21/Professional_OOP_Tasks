export default class BankAccount{
    constructor(accountNumber,accountName,balance)
    {
        this.accountNumber=accountNumber;
        this.accountName=accountName;
        this.balance=balance;
        
    }

    Deposit(ammount)
    {
        
        try
        {
        if(ammount<0)
        {
            throw new Error("Cannot deposit less than 0");
        }
        this.balance= ammount+this.balance;
        console.log("Ammount Deposited  " +ammount+ " Current balance="+ this.balance);
        
        }
        catch(error)
        {
        console.log("An error occured: "+error.message);
        }
        
       
        
    }
    Withdraw(withdrawAmmount)
    {
        try
        {
        if(withdrawAmmount>this.balance||withdrawAmmount<0){throw new Error("Withdraw ammount invalid, please check");}
        this.balance=this.balance-withdrawAmmount;
        console.log("Withdraw ammount = "+withdrawAmmount+" "+"Current Balance = "+this.balance);
    }
        
        catch(error)
        {
            console.log("An error occur :"+error.message);
        }

    }
    Transfer(transferAmount, receiverAccount) {
        try {
            if (!(receiverAccount instanceof BankAccount)) {
                throw new Error("Receiver must be a valid BankAccount");
            }
            if (transferAmount <= 0) {
                throw new Error("Transfer amount must be greater than 0");
            }
            if (transferAmount > this.balance) {
                throw new Error("Insufficient balance for transfer");
            }

            this.balance =this.balance- transferAmount;
            receiverAccount.balance =receiverAccount.balance+ transferAmount;

            console.log(`Transferred ${transferAmount} from ${this.accountNumber} to ${receiverAccount.accountNumber}`);
            console.log(`Current Balance: ${this.balance}`);
        } catch (error) {
            console.log("Transfer error, please check:", error.message);
        }
    }
}
    

/*const bankAcc=new BankAccount("Bank Account-01","BK-001",500);
const bankAcc2=new BankAccount("Bank Account-02","BK-002",680);
bankAcc.Deposit(500);
bankAcc.Withdraw(200);
bankAcc.Transfer(300,bankAcc2);
*/
