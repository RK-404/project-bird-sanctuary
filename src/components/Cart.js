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

  // const removeFromCart = () => {
  //   console.log("Clicked!");
  // }

  return (
    <div className="cart">
      <h3>Cart</h3>
      <h5>Discount {discount ? "10%" : "0%"} </h5>
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {`${item.name} $${item.amount.toFixed(2)} `}
            {/* <button onClick={removeFromCart}>Remove</button> */}
          </li>
        ))}
      </ol>

      <p><strong> Your donation has quapfied you for the following items:</strong></p>

      <ul>
        {bonuses.map((bonus, index) => <li key={index}>{bonus}</li> )}
      </ul>
    </div>
  );
}

export default Cart;
