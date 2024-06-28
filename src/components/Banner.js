import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage1 from '../images/bannerImage1.png';
import bannerImage2 from '../images/bannerImage2.png';
import bannerImage3 from '../images/bannerImage3.png';

const Banner = ({ title1, title2, subtitle, description }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>
          <pre>{title1}           {title2}</pre>
        </h1>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="explore-section" style={{ backgroundImage: `url(${bannerImage1})` }}>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="explore-section" style={{ backgroundImage: `url(${bannerImage2})` }}>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="explore-section" style={{ backgroundImage: `url(${bannerImage3})` }}>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
