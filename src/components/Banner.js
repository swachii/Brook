import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage1 from '../images/bannerImage1.png'; // Import your images
import bannerImage2 from '../images/bannerImage2.png'; // Import your images
import bannerImage3 from '../images/bannerImage3.png'; // Import your images
const Banner = ({ title1,title2, subtitle, description }) => {
  return (
    <div 
      className="banner" 
      
    >
      <div className="banner-content" >
        <h1><pre>    {title1}           {title2}</pre>  </h1> 
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="explore-section" style={{ backgroundImage: `url(${bannerImage1})` }}>
            <Carousel.Caption>
              <h2>{subtitle}</h2>
              <p>{description}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="explore-section" style={{ backgroundImage: `url(${bannerImage2})` }}>
            <Carousel.Caption>
              <h2>{subtitle}</h2>
              <p>{description}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="explore-section" style={{ backgroundImage: `url(${bannerImage3})` }}>
            <Carousel.Caption>
              <h2>{subtitle}</h2>
              <p>{description}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
