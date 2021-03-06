import React from 'react';
import './ManageInventories.css'

const ManageInventories = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.item;
    return (
        
            <tr>
                <td>{_id}</td>
                <td>{name}</td>
                <td><img src={image} className='img-thumbnail img-rounded'  id='img-product' alt="" srcSet="" /></td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{supplier}</td>
                <td>{quantity}</td>
                <td><button  className='btn btn-danger'>Delete</button></td>
            </tr>
        
    );
};

export default ManageInventories;