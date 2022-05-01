import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Items = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.item;
 const navigate=useNavigate();
    const   ItemdetailsNavigation=(_id)=>{
    navigate(`/inventory/${_id}`)
    } 
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
        {/* Quantity: {quantity} <br></br> */}
         Supplier: {supplier}
              </Card.Text>
               <button className='btn btn-success' onClick={()=>ItemdetailsNavigation(_id)} >Stock Update </button> 
        </Card.Body>
      </Card>
    </Col>
  ))}

        </div>
    );
};

export default Items;