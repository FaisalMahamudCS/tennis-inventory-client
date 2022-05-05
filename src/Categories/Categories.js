import React from 'react';
import './Categories.css'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const {category,photo}=props.category;
    return (

    <Col>
      <Card className='h-100 box d-flex p-2 flex-column '>
        <Card.Img variant="top"src={photo} className='h-50'   />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
      
          <Card.Text>
      
              </Card.Text>
               <button className='mt-auto button-card' >Stock Update </button> 
        </Card.Body>
      </Card>
    </Col>
  
    );
};

export default Categories;