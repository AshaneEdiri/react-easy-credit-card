/**
 * The credit card test component
 *
 * @version 1.0.0
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
      <CreditCard submitbuttontext="Submit card" onsubmitfunc={myHandlerFunction} expiryMinMonth="2021-10" />
    </div>
  );
}

export default CreditCardTest;
