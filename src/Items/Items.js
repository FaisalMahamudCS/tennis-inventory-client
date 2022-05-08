import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Items = (props) => {
  //destructure
    const {_id,name,image,description,price,quantity,supplier}=props.item;
 const navigate=useNavigate();
    const   ItemdetailsNavigation=(_id)=>{
    navigate(`/inventory/${_id}`)
    //go to inventory detail
    } 
    return (
        


    <Col>
    
      <div className="box h-100 product-grid">
            <div className="product-image">
              <img src={image} alt="" srcSet="" />
                
            </div>
            <div class="product-content">
               
                <h3 className="title">{name}</h3>
                <div className="price">{price}</div>


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