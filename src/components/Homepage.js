import React, { useState } from "react";
import Products from "./Products";
import ContactForm from './ContacForm';
import PayPal from './PayPal';
import Footer from "./Footer";

//import Paypal from "./initPayPalButton.js"; 



const Homepage = () => {

  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="homepage">
      <section className="producto">

        <Products></Products>

      </section>

      <section id="contact-section" className="contact">

        <div className="contactDiv">

          <div className="getingInTouch">
            <h1>Message us</h1>
          </div>

          <section>
            <ContactForm></ContactForm>

          </section>


          <div className="paypal">

            <div className="donation-text">
              <h2>If you enjoyed playing with the Polysynth, and spent some good time on the Website, you can make a donation down here. This helps us to continue with the development of this project.</h2>
              <h1>Add the amount you would like to contribute with, and click on the Paypal button.</h1>
              <p>*There will be other payment options further on.</p>
            </div>
            <PayPal></PayPal>
          </div>

        </div>

        <Footer></Footer>


      </section>
    </div>
  );
};

export default Homepage;







