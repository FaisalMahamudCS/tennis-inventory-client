import React from 'react';
import './Categories.css'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const {category,photo,quantity}=props.category;
    // const {quantity}=props.category.quantity;
    return (

    <Col>
      <Card className='  d-flex p-2 flex-column '>
        <Card.Img variant="top"src={photo} className='img-height'   />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
      
          <Card.Text>
           
              </Card.Text>
              
        </Card.Body>
        <button className=' button-card' > View </button> 
      </Card>
    </Col>
  
    );
};

export default Categories;