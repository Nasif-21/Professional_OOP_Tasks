export default class CreditCard
{
    static maxLimit=500000;
    static dailyWithdraw=100000;
    static perTrascation=20000;

    constructor(cardHolderName,cardNumber,cardType)
    {
    this.cardHolderName=cardHolderName;
    this.cardNumber=cardNumber;
    this.cardType=cardType;

    this.totalWithdrawToday=0;
    //this.totalUseFromCard=0;


    
    }
    
    Withdraw(withdrawSum)
    {
    //console.log(CreditCard.maxLimit);
    try{
    if(!this.cardHolderName?.trim() ||
      !this.cardNumber?.trim() ||
      !this.cardType?.trim() ||
      !(this instanceof CreditCard))
    {
        throw new Error("Invalid card credential");

    }
    if(withdrawSum>CreditCard.perTrascation)
    {
    throw new Error("Per trasction limit exceed!, (Per trascaction limit 20,000)");
    
    }
    if(withdrawSum+this.totalWithdrawToday>CreditCard.dailyWithdraw)
    {
        throw new Error("Today's limit exceed ");
        
    }
    if(withdrawSum<0)
     {
        throw new Error("Cannot transfer negative value");   
    }

    this.totalWithdrawToday=withdrawSum+this.totalWithdrawToday;
    console.log("Card name: "+this.cardHolderName+" " +" Card number: "+this.cardNumber+" "+"Card type: "+this.cardType);
    console.log("Withdraw Success");
    console.log("Withdraw amount: "+withdrawSum);
    console.log("Remaining limit: "+(CreditCard.dailyWithdraw-withdrawSum));
    
    }
    catch(error)
    {
         console.log("Error Occur : "+error.message);
    }
    }
    // Transaction()
    // {
    //  try{

    // }
    // catch(error)
    // {
    //      console.log("Error Occur : "+error.message);
    // }
    // }

    BillPayment(billAmount)
    {
    try{
    if(!this.cardHolderName?.trim() ||
      !this.cardNumber?.trim() ||
      !this.cardType?.trim() ||
      !(this instanceof CreditCard))
    {
        throw new Error("Invalid card credential");

    }
    if(billAmount>CreditCard.maxLimit)
    {
        throw new Error("Limit Exceed");
        
    }
    if(billAmount<0)
    {
        throw new Error("Cannot transfer negative value");
        
    }
    console.log("Card name: "+this.cardHolderName+" " +" Card number: "+this.cardNumber+" "+"Card type: "+this.cardType);
    console.log("Bill Payment success");
    
    }
    catch(error)
    {
        console.log("Error Occur : "+error.message);
    }

    }


}