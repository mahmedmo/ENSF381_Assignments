// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import "./Productpage.css";
const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {

    const storedCartItems = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cartItems'))))
    setCartItems(storedCartItems);

  }, []); // Runs only once on mount

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); // Runs every time cartItems changes


  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   console.log("AFTER GETTING: " + localStorage.getItem('cartItems'))
  //   setCartItems(storedCartItems);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   console.log("AFTER SETTING: " + localStorage.getItem('cartItems'))
  // }, [cartItems]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const handleRemoveItem = (id) => {
    cartItems.forEach((item, index) => {
      if (item.id === id) {
        item.quantity--;
        if (item.quantity === 0) {
          cartItems.splice(index, 1);
        }
      }
    });
    setCartItems([...cartItems])
  };


  return (
    <div className="product-page">
      <Header />
      <div className="shop-interface">
        <div className='products'>
          <ProductList onAddToCart={handleAddToCart} /></div>
        <div className='cart'>
          <h2 className='cart-header'>Shopping Cart</h2>
          <Cart
            cartItems={cartItems}
            onRemove={handleRemoveItem}

          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
