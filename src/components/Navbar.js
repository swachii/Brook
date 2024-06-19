import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png'; // Adjust the path to your logo image

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Brook" width="30" height="30" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Romance</a></li>
                  <li><a className="dropdown-item" href="/">Thriller</a></li>
                  <li><a className="dropdown-item" href="/">Fiction</a></li>
                  <li><a className="dropdown-item" href="/">Fantasy</a></li>
                  <li><a className="dropdown-item" href="/">Mystery</a></li>
                  <li><a className="dropdown-item" href="/">Horror</a></li>
                  <li><a className="dropdown-item" href="/">History</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex ms-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Books     " aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                <i className="fas fa-search"></i> Search
              </button>
            </form>

            <button className="btn btn-primary ms-2" type="button">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
