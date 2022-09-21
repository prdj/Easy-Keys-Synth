
import React, { useState } from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const PayPal = () => {


  let [input, setInput] = useState('')

  const handleEvent = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setInput(event.target.value)
  }

   const style = {
      
      'color': 'blue',
      'shape': 'rect',
      'label': 'paypal',
      'layout': 'horizontal',
       'size': '55',
      
    }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: input,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <div className="papal-component">
      <form >
        <input type="text" value={input} onInput={handleEvent} placeholder="*Net amount in EUR"/>
      </form>
   
    <PayPalButton
      style={style}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </div>
  );
}

export default PayPal;

