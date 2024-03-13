import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/Home.css'

function Home () {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleCategoryClick(categoryId) {
    setSelectedCategoryId(categoryId);
  }

  useEffect(() => {
    const waitAndSetLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    waitAndSetLoading();
  }, []);

  return (
    !loading ? (
    <div>
      <Header onCategoryClick={handleCategoryClick}/>
      <div className="home">
      <Products categoryId={selectedCategoryId}/>
      </div>
      <Footer />
    </div>
    ) : ( <Loading /> )
  )
}

export default Home;