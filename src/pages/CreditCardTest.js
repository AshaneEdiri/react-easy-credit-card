/**
 * The credit card test component
 *
 * @version 2.0.0
 * @author ashane2e
 */
import CreditCard from "../components/CreditCard";

/**
 * Write your own function like this when you want to do some processing with the submitted data
 */
const myHandlerFunction = (submittedCardObject) => {
  console.log(submittedCardObject);
  //prints {cardnumber: 'xxxx xxxx xxxx xxx', expiry: 'mm/yy', cvc: 'xxx', cardname: 'XXXXXX XXXXXXXXXXXXXX'}

  console.log(submittedCardObject.cardnumber);
  //prints xxxx xxxx xxxx xxx
};

/**
 * The function which uses the library
 */
function CreditCardTest() {
  return (
    <div className="credit-card-test-page-main">
      <CreditCard
        submitbuttontext="Submit card"
        onsubmitfunc={myHandlerFunction}
        expiryMinMonth="2021-10"                 //not mandatory, the minimum month which can be entered
        cardNumberLabel="Card Number"            //not mandatory
        expLabel="Month Of Expiry"               //not mandatory
        cvcLabel="CVC"                           //not mandatory
        cardNameLabel="Card Holder Name"         //not mandatory
      />
    </div>
  );
}

export default CreditCardTest;
