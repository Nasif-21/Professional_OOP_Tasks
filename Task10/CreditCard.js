export default class CreditCard
{
   #cardNumber;
   #expireDate;
   #spentAmount=0;

  constructor(cardNumber,expireDate)
  {
    this.#cardNumber=cardNumber;
    this.#expireDate=new Date(expireDate); 

   // this.#expireDate.setHours(0,0,0,0);
    try {
        if(typeof this.#cardNumber!='number')
        {
        throw new Error("Card Number must be a number");
        }
        if(typeof this.#expireDate!='object')
        {
            throw new Error("Date type must be an object");
            
        }
        
    } catch (error) {
        console.log("Error Occur :"+error.message);
        
    }

  }
  show()
  {
    console.log(this.#cardNumber);
    console.log(this.#expireDate);
  }

   static #creditLimit =500000;

   static getCreditLimit()
   {
    return this.#creditLimit;
   }

   isValid()
   {
    
    const today=new Date();
    today.setHours(0,0,0,0);
    this.#expireDate.setHours(0,0,0,0);
    

    if(today>this.#expireDate)
    {
        console.log("Your Card has Expire");
        return false;
    }
    else
    {
        console.log("Your card is valid");
        return true;
    }  
   }

   makePurchase(amount)
   {
    try {
        if(typeof amount!='number')
        {
            throw new Error("Amount must be a number");   
        }
        if(amount<=0)
        {
            throw new Error("Spent amount cannot be 0");
            
        }
        if(!this.isValid())
        {
            console.log("Card Expire !");
            return;
        }
        if(this.#spentAmount+amount>CreditCard.#creditLimit)
        {
            console.log("Purchase fail, insufficient credit");
            return;
        }
        this.#spentAmount+=amount;
        console.log("Purchase Success");
        
        
    } catch (error) {
        console.log("Error Message "+error.message)
        
    }

   }

   AvailableCredit()
   {
    const avl= CreditCard.#creditLimit-this.#spentAmount;
    console.log(`Available credit ${avl}`);

   }

}

//For making date in DD-MM-YYYY
// const dateInFormat=this.#expireDate.toLocaleDateString("en-GB",{
//     day: '2-digit',
//     month: 'numeric',
//     year: 'numeric'
//     });