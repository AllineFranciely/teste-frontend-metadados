import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import Logo from '../images/logo.png';
import '../styles/Header.css';

function Header () {
  const [filterByName, setFilterByName] = useState('');
  const [search, setSearch] = useState(false);

  return (
    <div className="header">
      <div className="topHeader">
        <IoSearch onClick={(e) => { e.preventDefault(); setSearch(!search); }}/>
        <div className="logoElements">
          <img className="logoImg" src={Logo} alt="losangos trançados"/>
          <h1 className="logo">CORAL</h1>
          <img className="logoImg" src={Logo} alt="losangos trançados"/>
        </div>
          <Link to="/cart" className="cart-link"><FaBagShopping className="iconCart"/>Cart</Link>
      </div>
      {search ? (
        <input
          type="text"
          className="search"
          placeholder={"pesquisar por nome"}
          onChange={(event) => setFilterByName(event.target.value)}
        /> ) : ''}
    </div>
  )
}

export default Header;