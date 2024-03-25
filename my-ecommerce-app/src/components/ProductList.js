// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
export default ProductList;
