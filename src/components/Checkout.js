import React from "react";

function Checkout({ cartItems, setCartItems }) {

  const handelSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length) {
      setCartItems([]);
      document.getElementById("checkout-form").reset();
      window.alert("You have adopted birds. Thank you!");
    }
    else window.alert("Add bird(s) to checkout!");
  }
  
  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <form id="checkout-form" onSubmit={handelSubmit} >
        <label>First Name</label>
        <input type="text" required />

        <label>Last Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Zip Code</label>
        <input type="number" required />
        <br/>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Checkout;
