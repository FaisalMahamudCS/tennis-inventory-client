import React from 'react';
import './Categories.css'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const {_id,category,photo,quantity}=props.category;
    //destructuring
    const navigate=useNavigate();
    
    const categorywiseproduct=(category)=>{
//nevigate to categorywise product
      navigate(`/categorywiseproduct/${category}`)
    }
  
    return (

    <Col>
     
 <div className="box h-100 product-grid">
            <div className="product-image">
              <img src={photo} className='img-height' alt="" srcSet="" />
                
            </div>
            <div className="product-content">
               
                <h3 className="title">{category}</h3>
               
         
            </div>
            <button className='  button-card ml-2' onClick={()=>categorywiseproduct(category)} >View </button> 
        </div>

    </Col>
  
    );
};

export default Categories;