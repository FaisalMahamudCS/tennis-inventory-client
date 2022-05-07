import React from 'react';
import {Carousel} from  'react-bootstrap'; 
import './Banner.css';
const Banner = () => {
    return (
        <div>
    
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rf0f7Ny/banner3work.jpg"
      alt="Second slide"
      
    />
    <div className="carousel-caption d-none d-md-block">
<h5>Tennis Sports Inventory</h5>
<p>In this inventory management system you can track your product and check</p>
<button>More </button>
    </div>
    </div>
    <div className="carousel-item">
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rf0f7Ny/banner3work.jpg"
      alt="Second slide"
    />
      <div className="carousel-caption d-none d-md-block">
<h5>Manage Your All Product</h5>
<p>In this inventory management system you can track your product and find product categorywise</p>
<button>More </button>
    </div>
    </div>
    <div className="carousel-item">
    <img
      className="d-block w-100"
      src="https://i.ibb.co/NrVc1XX/banner-inv.jpg"
      alt="Third slide"
    />
      <div className="carousel-caption d-none d-md-block">
<h5> DashBoard</h5>
<p>You can find dashboard Product</p>
<button>More </button>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Banner;