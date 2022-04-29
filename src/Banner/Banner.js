import React from 'react';
import {Carousel} from  'react-bootstrap'; 
const Banner = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/NrVc1XX/banner-inv.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Most Sold</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rf0f7Ny/banner3work.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Most Rated</h3>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/NrVc1XX/banner-inv.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Catagory</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    );
};

export default Banner;