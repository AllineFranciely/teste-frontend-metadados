import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
      // console.log(products)
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  function handleCategoryClick(categoryId) {
  fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      // console.log('Dados da resposta:', data);
    })
    .catch(error => console.error('Erro ao fazer requisição:', error));
}

const addToCart = (product) => {
  const updatedCart = [...cartItems, { ...product, quantity: 1 }];
  setCartItems(updatedCart);

  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};

const selectProductForDetails = (product) => {
  const updateSelectedProduct = { ...product };
  setSelectedProduct(updateSelectedProduct);

  localStorage.setItem('selectedProduct', JSON.stringify(updateSelectedProduct));

  navigate('/product', { state: { product } });
  console.log("selectedProduct", localStorage.selectedProduct)
};

useEffect(() => {
  console.log("selectedProduct", selectedProduct);
}, [selectedProduct]);

  return (
    <div>
       <div>
        <nav className="navbar">
          {categories.map((category) => (
            <p className="links" onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </p>
          ))}
        </nav>
      </div>
      <div className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <div className="productInit">
            <img className="productImage" src={product.images[0]} alt={product.title} />
            <button onClick={() => {addToCart(product); }} className="productBuy">Comprar</button>
          </div>
          <h2 onClick={() => {selectProductForDetails(product); }} className="productName">{product.title}</h2>
          <div className="productInfos">
            <p className="productCategory">{product.category.name}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Products;