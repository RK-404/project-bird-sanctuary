import React from "react";
import { useState, useEffect } from "react";
import birdsData from "./data/birds";
import bonusItems from "./data/bonusItems";
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App () {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cartItems.forEach(bird => price += bird.amount);

    if (cartItems.length >= 3) {
      price *= 0.9;
    }
    setTotalPrice(price);

  }, [cartItems]);

  return (
    <main>
      <div className="left-section">
        <Cart 
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalPrice={totalPrice}
          bonusItems={bonusItems}
        />
        <Checkout
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>

      <div className="birds">
        {birdsData.map((bird) => (
          <BirdCard
            key={bird.id}
            bird={bird}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          ))}
      </div>
    </main>
  );
};

export default App;
