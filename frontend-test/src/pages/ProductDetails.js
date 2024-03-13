import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBagShopping } from "react-icons/fa6";
import '../styles/ProductDetails.css';

function ProductDetails() {
  const [productForDetails, setProductForDetail] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const productSelectedDetails = localStorage.getItem('selectedProduct');
    if (productSelectedDetails) {
      setProductForDetail(JSON.parse(productSelectedDetails));
    }
  }, []);
  console.log("selectedProduct", productForDetails);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Header />
      <div className="productDetails">
        <img className="detailImg" src={productForDetails.images} alt={productForDetails.title} />
        <div className="details"> 
          <h2 className="detailTitle">{productForDetails.title}</h2>
          <p className="detailPrice">R${productForDetails.price}</p>
          <p className="detailDescription">{productForDetails.description}</p>
          <button onClick={() => {addToCart(productForDetails); }} className="detailButton"><FaBagShopping className="iconCart"/>Shop Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
