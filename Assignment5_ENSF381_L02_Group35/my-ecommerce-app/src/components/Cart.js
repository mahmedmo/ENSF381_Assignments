// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React from 'react';
import CartItem from './CartItem';
import './Cart.css'
const Cart = ({ cartItems, onRemove, onDecrease, onIncrease }) => {

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} onDecrease={onDecrease} onIncrease={onIncrease} />
      ))}

      <div className='cart-total'>Total (in cart): ${totalPrice.toFixed(2)}</div>
    </div>
  );
};
export default Cart;
