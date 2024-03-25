// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';
import "./HomeMainSection.css";
const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffled = [...reviews].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    };

    setRandomReviews(getRandomReviews());
  }, []);

  return (
    <section>
      <div className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>

        <Link to="/products" className="shop-now-btn">
          <input type="submit" value="Shop Now" />
        </Link>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p className='reviewerName'>{review.customerName}</p>
            <p className='reviewerContent'>{review.reviewContent}</p>
            <div className='reviewerRating'>Rating: {"⭐".repeat(review.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;
