// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React from 'react';
import './CartItem.css'
const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img className="item-image" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button className="remove-item" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};
export default CartItem;

