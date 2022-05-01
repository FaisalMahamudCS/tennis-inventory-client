import React from 'react';
import { Table } from 'react-bootstrap';
import useItem from '../Hooks/useItem';
import ManageInventories from '../ManageInventories/ManageInventories';

const ManageInventory = () => {
    const [item,setItem]=useItem();
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
    </tr>
    </thead>
    <tbody>
      {
          item?.map(item=><ManageInventories key={item._id} item={item}></ManageInventories>)
      }
  
 
 
  </tbody>
</Table>
        </div>
    );
};

export default ManageInventory;