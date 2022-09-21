
import React, { useEffect } from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


const Paypal = () => {
    
    useEffect(() => {
      const description = document.querySelector('#smart-button-container #description');
      const amount = document.querySelector('#smart-button-container #amount');
      const descriptionError = document.querySelector('#smart-button-container #descriptionError');
      const priceError = document.querySelector('#smart-button-container #priceLabelError');
      const invoiceid = document.querySelector('#smart-button-container #invoiceid');
      const invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
      const invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

    const elArr = [description, amount];

    if (invoiceidDiv.firstChild.innerHTML.length > 1) {
      invoiceidDiv.style.display = "block";
    }
    
    var purchase_units = [];
    purchase_units[0] = {};
    purchase_units[0].amount = {};

    function validate(event) {
      return event.value.length > 0;
    }

    window.paypal.Buttons({
      style: {
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
        layout: 'horizontal',
        height: '55',
        
      },

      onInit(data, actions) {
        actions.disable();

        if(invoiceidDiv.style.display === "block") {
          elArr.push(invoiceid);
        }

        elArr.forEach(function (item) {
          item.addEventListener('keyup', function (event) {
            var result = elArr.every(validate);
            if (result) {
              actions.enable();
            } else {
              actions.disable();
            }
          });
        });
      },

      onClick() {
        if (description.value.length < 1) {
          descriptionError.style.visibility = "visible";
        } else {
          descriptionError.style.visibility = "hidden";
        }

        if (amount.value.length < 1) {
          priceError.style.visibility = "visible";
        } else {
          priceError.style.visibility = "hidden";
        }

        if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
          invoiceidError.style.visibility = "visible";
        } else {
          invoiceidError.style.visibility = "hidden";
        }

        purchase_units[0].description = description.value;
        purchase_units[0].amount.value = amount.value;

        if(invoiceid.value !== '') {
          purchase_units[0].invoice_id = invoiceid.value;
        }
      },

      createOrder(data, actions) {
        return actions.order.create({
          purchase_units: purchase_units,
        });
      },

      onApprove(data, actions) {
        return actions.order.capture().then(function (orderData) {

          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError(err) {
        console.log(err);
      }
    })

  }, []);
  
 
  
  return (
    
      <div id="smart-button-container" style={{height:'500px'}}>

        <div style={{textAlign: 'center'}}>
          <label for="description">Add a little note to your donation </label>
          <input type="text" name="descriptionInput" id="description" maxlength="127" value=""/>
        </div>

          <p id="descriptionError" style={{visibility: 'hidden', color:'red', textAlign: 'center'}}>Please enter a description</p>

        <div style={{textAlign: 'center'}}>
          <label for="amount"> </label><input name="amountInput" type="number" id="amount" value="" />
          <span> EUR</span>
        </div>

          <p id="priceLabelError" style={{visibility: 'hidden', color:'red', textAlign: 'center'}}>Please enter a price</p>

        <div id="invoiceidDiv" style={{textAlign: 'center', display: 'none'}}>
          <label for="invoiceid"> </label>
          <input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="" />
        </div>

          <p id="invoiceidError" style={{visibility: 'hidden', color:'red', textAlign: 'center'}}>Please enter an Invoice ID</p>

        <div style={{textAlign: 'center', marginTop: '0.625rem'}} id="paypal-button-container"></div>
        <PayPalButton></PayPalButton>
      </div>
    
  );
}

export default Paypal;






  
  
  