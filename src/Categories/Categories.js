import React from 'react';
import './Categories.css'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const {_id,category,photo,quantity}=props.category;
    const navigate=useNavigate();
    
    const categorywiseproduct=(category)=>{
      navigate(`/categorywiseproduct/${category}`)
    }
    // const {quantity}=props.category.quantity;
    return (

    <Col>
      {/* <Card className='  d-flex p-2 flex-column '>
        <Card.Img variant="top"src={photo} className='img-height'   />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
      
          <Card.Text>
           
              </Card.Text>
              
        </Card.Body>
        <button className=' button-card' > View </button> 
      </Card> */}
 <div class="box h-100 product-grid">
            <div class="product-image">
              <img src={photo} className='catagory-img' alt="" srcSet="" />
                
            </div>
            <div class="product-content">
               
                <h3 class="title">{category}</h3>
               
         
            </div>
            <button className='  button-card ml-2' onClick={()=>categorywiseproduct(category)} >View </button> 
        </div>

    </Col>
  
    );
};

export default Categories;