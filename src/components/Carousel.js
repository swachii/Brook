import React from 'react';
import firstpic from './images/1.jpg';
import secondpic from './images/2.jpg';
import thirdpic from './images/3.jpg';
import fourthpic from './images/4.jpg';
import './Carousel.css';  // Import custom CSS for additional styling

export default function Carousel() {
  return (
    <div className="carousel-container my-4">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstpic} className="d-block w-100 carousel-image" alt="First Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide</h5>
              <p>Description for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={secondpic} className="d-block w-100 carousel-image" alt="Second Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide</h5>
              <p>Description for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={thirdpic} className="d-block w-100 carousel-image" alt="Third Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide</h5>
              <p>Description for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={fourthpic} className="d-block w-100 carousel-image" alt="Fourth Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth Slide</h5>
              <p>Description for the fourth slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
