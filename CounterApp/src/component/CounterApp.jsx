import React, { useState } from "react";
import "./CounterApp.css"; // Import external CSS

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <p className="count-text">Count: <span key={count} className="count-number">{count}</span></p>
      <button 
        className="count-button" 
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default CounterApp;
