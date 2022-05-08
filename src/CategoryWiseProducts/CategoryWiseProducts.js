import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CategoryWiseProducts = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.categoryProduct;
const navigate=useNavigate();
    const   ItemdetailsNavigation=(_id)=>{
        navigate(`/inventory/${_id}`)
        } 
    return (
       

    <Col>
  
    <div className="box h-100 product-grid">
          <div className="product-image">
            <img src={image} alt="" srcSet="" />
              
          </div>
          <div className="product-content">
             
              <h3 className="title">{name}</h3>
              <div className="price">{price}</div>


                     {description}
                     Price:{price} <br></br>
     Quantity: {quantity} <br></br> 
       Supplier: {supplier}
       
          </div>
          <button className='  button-card ml-2' onClick={()=>ItemdetailsNavigation(_id)} >Stock Update </button> 
      </div>
     
   
  </Col>
    );
};

export default CategoryWiseProducts;