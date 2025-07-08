export default class Customer
{
  #customerName;
  #dateOfBirth;
  #CreditCard;

  constructor(customerName,dateOfBirth,CreditCard)
  {
    this.#customerName=customerName;
    this.#dateOfBirth=new Date(dateOfBirth);
    this.#CreditCard=CreditCard;

    try {
        if(!(CreditCard instanceof Object))
        {
            throw new Error("Invalid Credit Card Object");
            
        }
        
        
    } catch (error) {
        console.log("Error Occur "+error.message);
        
    }

  }
  getAge()
  {
     const today = new Date();
    let age = today.getFullYear() - this.#dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - this.#dateOfBirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.#dateOfBirth.getDate())) {
      age--;
    }

    return age;

  }
  isEligible()
  {
    return this.getAge()>=18;

  }


  Purchase(amount)
  {
    if(!this.isEligible())
    {
        console.log("Customer not elegible for transaction");
        return;
    }
    this.#CreditCard.makePurchase(amount);

  }
}