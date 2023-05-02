import React from "react";

function Checkout({ cartItems, setCartItems, setDiscount }) {

  function handelSubmit(event) {
    event.preventDefault();

    if (cartItems.length) {
      setCartItems([]);
      setDiscount(false);
      document.getElementById("checkout-form").reset();
      alert("You have adopted birds. Thank you!");
    }
    else alert("Add bird(s) to checkout!");
  }
  
  return(
    <div className="checkout">
      <h4>Checkout</h4>
      <form id="checkout-form" onSubmit={handelSubmit} >
        <label>First Name</label>
        <input type="text" required />

        <label>Last Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Zip Code</label>
        <input type="number" required />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Checkout;
