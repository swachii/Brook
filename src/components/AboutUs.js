// src/components/AboutUs.js

import React from 'react';
import './AboutUs.css';  // We'll style the component using a dedicated CSS file

const AboutUs = () => {
  return (
    <div className="about-us container py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="lead text-center">Welcome to Brook - Your ultimate destination for a wide range of books across various genres!</p>
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h4>Our Mission</h4>
          <p>At Brook, our mission is to foster a love of reading and knowledge by providing an extensive collection of books from all genres and for all age groups. We aim to connect readers with their next great read and help them explore new worlds, ideas, and perspectives.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h4>Our Values</h4>
          <ul>
            <li>Passion for Books</li>
            <li>Customer Satisfaction</li>
            <li>Diversity and Inclusion</li>
            <li>Integrity and Transparency</li>
            <li>Community Engagement</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <h4>Contact Us</h4>
          <p>We'd love to hear from you! Whether you have a question, feedback, or just want to chat about your favorite books, feel free to reach out to us.</p>
          <p><i className="fas fa-envelope"></i> Email: support@brook.com</p>
          <p><i className="fas fa-phone"></i> Phone: +977 9819102361</p>
        </div>
        <div className="col-md-6 mb-4">
          <h4>Our Team</h4>
          <p>Our team is comprised of passionate individuals who are dedicated to bringing you the best possible experience. We are book enthusiasts, customer service experts, and tech-savvy professionals committed to making Brook your go-to destination for books.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
