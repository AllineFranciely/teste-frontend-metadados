import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  
  const handleIncrement = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };
  
  return (
    <div>
      <Header />
      <div className="cart">
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cartItems">
                    <div className="productCartpresentation">
                      <img className="productCartImg" src={item.images[0]} alt={item.title} />
                      <p className="productCartName">{item.title}</p>
                    </div>
                    <p className="productCartPrice">R${item.price}</p>
                    <div className="productCartQuantity">
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      <span className="quantityCartItem">{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                    <p className="productsCartTotal">R${item.price * item.quantity}</p>
                    <button onClick={() => handleRemove(item.id)}></button>
            </div>
          ))}
          <div className="priceTotalCart">
            <h3>Total</h3>
            <p>R${cartItems.reduce((total, item) => (total + item.price) * item.quantity, 0)}</p>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Cart;
