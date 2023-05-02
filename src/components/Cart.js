import React from "react";

function Cart({ cartItems, totalPrice, discount, bonusItems }) {
  const bonuses = [];

  if (totalPrice >= 100 && totalPrice <= 300) {
    bonuses.push(bonusItems[0]);
  }
  else if (totalPrice > 300 && totalPrice <= 500) {
    bonuses.push(bonusItems[0], bonusItems[1]);
  }
  else if (totalPrice > 500 && totalPrice <= 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  }
  else if (totalPrice > 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  return (
    <div className="cart">
      <h4>Cart</h4>
      <p>Discount {discount ? "10%" : "0%"} </p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} ${item.amount.toFixed(2)}
          </li>
        ))}
      </ol>

      <span>Your donation has quapfied you for the following items:</span>

      <ul>
        {bonuses.map((bonus, index) => <li key={index}>{bonus}</li> )}
      </ul>
    </div>
  );
}

export default Cart;
