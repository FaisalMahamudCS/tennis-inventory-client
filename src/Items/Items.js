import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Items = (props) => {
    const {name,image,description,price,quantity,supplier}=props.item;
    return (
        <div>

  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} className='h-50'   />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {description}
        
          </Card.Text>
          <Card.Text>
          Price:{price} <br></br>
        Quantity: {quantity} <br></br>
         Supplier: {supplier}
              </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}

        </div>
    );
};

export default Items;