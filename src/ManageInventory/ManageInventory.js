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
          item.map(item=><ManageInventories key={item._id} item={item}></ManageInventories>)
      }
  
 
 
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    );
};

export default ManageInventory;