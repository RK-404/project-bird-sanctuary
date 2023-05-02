import React from "react";
// import useState from "react"

function BirdCard({ bird, setCartItems }) {

    const handleCart = () => {
        const birdData = {
            name: bird.name,
            amount: bird.amount
        }
        setCartItems(cartItems => [...cartItems, birdData]);
        // setCartItem([...cartItems, birdData]);
    }
    
    return (
        <ul className="card">
            <p className="name">{bird.name}</p>
            <p>Price: ${bird.amount.toFixed(2)}</p>
            <img src={bird.img} alt={bird.name} />
            <button onClick = {handleCart}>Adopt</button>
        </ul>
    );
}
  
export default BirdCard;
