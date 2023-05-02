import React from "react";
import { useState, useEffect } from "react";
import birdsData from "./data/birds";
import bonusItems from "./data/bonusItems"
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App () {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
    let price = 0;
    for (let item of cartItems) {
      price += item.amount;
    }
    if (cartItems.length >= 3) {
      price *= 0.9;
      setDiscount(true);
    } 
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <main>
      <div className="cart-checkout">
        <Cart 
          cartItems={cartItems}
          totalPrice={totalPrice}
          discount={discount}
          bonusItems={bonusItems}
        />
        <Checkout
          cartItems={cartItems}
          setCartItems={setCartItems}
          setDiscount={setDiscount}
        />
      </div>

      <div className="birds">
        {birdsData.map((bird) => (
          <BirdCard 
            key={bird.id}
            bird={bird}
            setCartItems={setCartItems}
          />
          ))}
      </div>
    </main>
  );
};

export default App;
