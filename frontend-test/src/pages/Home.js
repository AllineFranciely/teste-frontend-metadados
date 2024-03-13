import React, { useState } from "react";
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';
import '../styles/Home.css'

function Home () {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  function handleCategoryClick(categoryId) {
    setSelectedCategoryId(categoryId);
  }

  return (
    <div>
      <Header onCategoryClick={handleCategoryClick}/>
      <div className="home">
      <Products categoryId={selectedCategoryId}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home;