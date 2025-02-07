import { useState } from "react";
import "./App.css";

function App() {

  const [ bill ,setbil] = useState("");
  const [tip , setTip] = useState(10)
  const [totalAmount ,  setTAmount] = useState(0)
  const [TolalAllAmount , setTolalAllAmount] = useState(0);

   const handleInput = (event)=>{
    setbil(event.target.value)
   }

   const handleSecondIput = (event)=>{
    setTip(event.target.value)

   }

   const handleCalculateAmount = () => {
    const Amount = (bill * tip )/100;
    setTAmount (Amount);
    setTAmount(bill + Amount);
    setTolalAllAmount(totalAmount);
   
  };
  return (
    <>
      <div className=" main-section">
        <h1 className="heading_name">Tip Calculator</h1>
        <p className="heading-Peragraph">
          Enter the bill amount and tip percentage to calculate the total.
        </p>
        <div>
          <p>Bill amount:</p>
          <input className="first-input" type="text" value={bill} onChange={handleInput} />
          <p>Tip percentage:</p>
          <input className="second-input" type="text" value={tip} onChange={handleSecondIput}/>
        </div>

        <p>button section</p>
        <button className="calculate-button " onClick={handleCalculateAmount}> CALCULATE</button>
        <p className="total-amount-section">Total Amaount ${TolalAllAmount}</p>
      </div>
    </>
  );
}

export default App;
