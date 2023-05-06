import React from "react";

function Cart({ cartItems, setCartItems, totalPrice, bonusItems }) {

  const removeFromCart = (index) => {
    let tempCart = [...cartItems];
    tempCart.splice(index, 1);
    setCartItems(tempCart);
  }

  const bonuses = [];
  if (totalPrice >= 100) {
    bonuses.push(bonusItems[0]);
  }
  if (totalPrice >= 300) {
    bonuses.push(bonusItems[1]);
  }
  if (totalPrice >= 500) {
    bonuses.push(bonusItems[2]);
  }
  if (totalPrice >= 1000) {
    bonuses.push(bonusItems[3]);
  }

  return (
    <div className="cart">
      <h3>Cart</h3>
      <h5>Discount {cartItems.length >= 3 ? "10%" : "0%"} </h5>
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
      <ol>
        {cartItems.map((bird, index) => (
          <li key={index}>
            {`${bird.name} $${bird.amount.toFixed(2)} `}
            <span className="remove" onClick={() => removeFromCart(index)}>X</span>
          </li>
        ))}
      </ol>
      <p><strong>Your donation has quapfied you for the following items:</strong></p>
      <ul>
        {bonuses.map((bonus, index) => <li key={index}>{bonus}</li> )}
      </ul>
    </div>
  );
}

export default Cart;
