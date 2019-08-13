import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  
      <button className="number-button">
        {props.number}
      </button>

    </>
  );
};




export default NumberButton;


{/* <button className="number-button" onClick={() => props.addNumber(props.text) } >
{props.number}
</button> */}
