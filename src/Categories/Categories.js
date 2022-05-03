import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const {category}=props.category._id;
    return (
        <div>
            
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top"  className='h-50'   />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
          
        
          </Card.Text>
          <Card.Text>
      
              </Card.Text>
               <button className='btn btn-success' >Stock Update </button> 
        </Card.Body>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default Categories;