import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItem from '../Hooks/useItem';
import ManageInventories from '../ManageInventories/ManageInventories';

const ManageInventory = () => {
    const [item,setItem]=useItem();
    const navigate=useNavigate();
   const redirectAddInventory=()=>{
 navigate('/addInventoryItem')
   }
    return (
        <div>
            <Table striped bordered hover>
            <thead>
            <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Photo</th>
      <th>Description</th>
      <th>Price</th>
      <th>Dealer</th>
      <th>Quantity</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
      {
          item?.map(item=><ManageInventories key={item._id} item={item}></ManageInventories>)
      }
  
 
 
  </tbody>
</Table>
<div className='align-item-center d-flex justify-content-center'>
  <button className='btn btn-success' onClick={redirectAddInventory}>Add Item</button>
</div>
        </div>
    );
};

export default ManageInventory;