import React from 'react';

const MyItems = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.myitem;
    
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

export default MyItems;