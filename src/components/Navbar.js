import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png'; // Adjust the path to your logo image
import LoginSignup from './LoginSignup/LoginSignup';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="{this.title}" width="30" height="30" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Fantasy</a></li>
                <li><a className="dropdown-item" href="/">Fiction</a></li>
                <li><a className="dropdown-item" href="/">Romance</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex flex-nowrap mx-auto">
            <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search Books..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-search"></i> Search
            </button>
          </form>
          <button className="btn btn-dark ms-2" type="button">Login </button>
          <button className="btn btn-dark ms-2" type="button">Contact Us </button>

        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
