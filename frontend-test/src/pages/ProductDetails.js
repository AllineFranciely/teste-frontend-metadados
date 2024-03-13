import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const [productForDetails, setProductForDetail] = useState([]);

  useEffect(() => {
    const productSelectedDetails = localStorage.getItem('selectedProduct');
    if (productSelectedDetails) {
      setProductForDetail(JSON.parse(productSelectedDetails));
    }
  }, []);
  console.log("selectedProduct", productForDetails);

  return (
    <div>
      <Header />
      <div className="productDetails">
        <img className="detailImg" src={productForDetails.images} alt={productForDetails.title} />
        <div className="details"> 
          <h2 className="detailTitle">{productForDetails.title}</h2>
          <p className="detailPrice">R${productForDetails.price}</p>
          <p className="detailDescription">{productForDetails.description}</p>
          <button>Comprar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
