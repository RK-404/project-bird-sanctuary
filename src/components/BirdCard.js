import React from "react";
// import useState from "react"

function BirdCard({ bird, cartItems, setCartItems }) {

    const addToCart = () => {
        const addedBird = {
            name: bird.name,
            amount: bird.amount
        }
        setCartItems([...cartItems, addedBird]);
        // setCartItems(cartItems => [...cartItems, addedBird]);
    }
    
    return (
        <section className="card">
            <p className="name">{bird.name}</p>
            <p>Price: ${bird.amount.toFixed(2)}</p>
            <img src={bird.img} alt={bird.name} />
            <button onClick = {addToCart}>Adopt</button>
        </section>
    );
}
  
export default BirdCard;
