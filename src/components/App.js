import React, { useState } from "react";
import './../styles/App.css';


const App = (props) => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!false)
  }

  return (
    <div className="App" id="main">
      <p className={show ? "show" : "hide"} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App
