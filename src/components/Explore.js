import React from 'react';
import './Explore.css'; // Your CSS file
import Bookcards from './Bookcards'; // Reuse the Bookcards component

const Explore = () => {
  return (
    <div className="explore-container">
      <h1>Explore New Books</h1>
      <p>Discover books by category, genre, and more. Find your next favorite read!</p>
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category-item">Fiction</div>
          <div className="category-item">Non-Fiction</div>
          <div className="category-item">Mystery</div>
          <div className="category-item">Sci-Fi</div>
          <div className="category-item">Fantasy</div>
          <div className="category-item">Romance</div>
        </div>
      </div>
      <div className="explore-books">
        <h2>Popular Books</h2>
        <Bookcards />
      </div>
    </div>
  );
};

export default Explore; // Ensure this line is present
