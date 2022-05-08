import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Items = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.item;
 const navigate=useNavigate();
    const   ItemdetailsNavigation=(_id)=>{
    navigate(`/inventory/${_id}`)
    } 
    return (
        


    <Col>
      {/* < Card className='h-100 box d-flex p-2 flex-column '>
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
        <button className=' mt-auto button-card' onClick={()=>ItemdetailsNavigation(_id)} >Stock Update </button> 
      </Card> */}
      <div class="box h-100 product-grid">
            <div class="product-image">
              <img src={image} alt="" srcSet="" />
                
            </div>
            <div class="product-content">
               
                <h3 class="title">{name}</h3>
                <div class="price">{price}</div>


                      Description: {description}<br></br>
                       Price:{price} <br></br>
       Quantity: {quantity} <br></br> 
         Supplier: {supplier} <br></br> 
         
            </div>
            <button className='  button-card ml-2' onClick={()=>ItemdetailsNavigation(_id)} >Stock Update </button> 
        </div>
       
     
    </Col>
  // ))}

        
    );
};

export default Items;