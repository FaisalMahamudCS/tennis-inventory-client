import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Suppliers.css'
const Suppliers = (props) => {
    const {_id,name,photo,supply,description}=props.supplier;
    return (
        <div>
          
    <Col>
     
     <div class="box h-100 product-grid">
                <div class="product-image">
                  <img src={photo} className='card-img-top'  alt="" srcSet="" />
                    
                </div>
                <div class="product-content">
                   
                    <h3 class="title">{name}</h3>
                   Supply: {supply} <br></br>
                   Description: {description}  <br></br>
                   
             
                </div>
               
            </div>
    
        </Col>
        
        </div>
    );
};

export default Suppliers;