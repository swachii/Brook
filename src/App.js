import './App.css';
import Bookcards from './components/Bookcards';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import brooklogo from './components/images/brooklogo.png';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs/>} />
            {/* Add more routes as necessary */}
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer py-5 bg-dark text-light">
          <div className="container">
            <div className="row">
              {/* Logo and About */}
              <div className="col-md-3 mb-4">
                <img src={brooklogo} alt="Brook Logo" className="mb-3" height="80" width="80" />
                <h5 className="text-uppercase">Brook</h5>
                <p>
                  Brook is your one-stop destination for a diverse range of books across various genres. Explore our collection and embark on new adventures!
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-light">Home</a></li>
                  <li><a href="/about" className="text-light">About Us</a></li>
                  <li><a href="/categories" className="text-light">Categories</a></li>
                  <li><a href="/contact" className="text-light">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled contact-info">
                  <li><i className="fas fa-map-marker-alt"></i> Brook Office, Lamachaur</li>
                  <li><i className="fas fa-phone"></i> +977 9819102361</li>
                  <li><i className="fas fa-envelope"></i> support@brook.com</li>
                </ul>
              </div>

              {/* Newsletter and Social Media */}
              <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Newsletter</h5>
                <form className="mb-3">
                  <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                  <button type="submit" className="btn btn-primary btn-block">Subscribe</button>
                </form>
                <h5 className="text-uppercase">Follow Us</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com" className="text-light me-2"><i className="fab fa-twitter"></i></a>
                  <a href="https://instagram.com" className="text-light me-2"><i className="fab fa-instagram"></i></a>
                  <a href="https://linkedin.com" className="text-light"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <small className="text-muted">&copy; 2024 Brook. All Rights Reserved</small>
            </div>
          </div>
        </footer>
      </>
    </Router>
  );
}

const Home = () => (
  <>
    <Carousel />
    <Bookcards />
  </>
);

export default App;
