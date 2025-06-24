import CreditCard from "./creditCardClass.js";

//Test case for Bill Payment
export function testBillPayment(cardHolderName,cardNumber,cardType,billAmount)
{
  console.log(`\n--- Testing BillPayment ---`);
  console.log(`Card Holder: ${cardHolderName}`);
  console.log(`Card Number: ${cardNumber}`);
  console.log(`Card Type: ${cardType}`);
  console.log(`Bill Amount: ${billAmount}`);

    const card=new CreditCard(cardHolderName,cardNumber,cardType)
    card.BillPayment(billAmount);


}

//Test case for withdraw
export function testWithdraw(cardHolderName,cardNumber,cardType,withdrawSum)
{
  console.log(`\n--- Testing Withdraw ---`);
  console.log(`Card Holder: ${cardHolderName}`);
  console.log(`Card Number: ${cardNumber}`);
  console.log(`Card Type: ${cardType}`);
  console.log(`Withdraw Amount: ${withdrawSum}`);

  const card = new CreditCard(cardHolderName, cardNumber, cardType);
  card.Withdraw(withdrawSum);
}