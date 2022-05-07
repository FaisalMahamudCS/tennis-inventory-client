import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItem from '../Hooks/useItem';
import ManageInventories from '../ManageInventories/ManageInventories';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
    const [item,setItem]=useItem();
    const navigate=useNavigate();
   const redirectAddInventory=()=>{
 navigate('/addInventoryItem')
   }
   const  deleteItem=(_id)=>{
    const proceed = window.confirm('Are you sure?',_id);
    if(proceed){
        const url = `http://localhost:5000/item/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           
            const remainItem =item.filter(item => item._id !== _id);
            setItem(remainItem);
          
            toast.success('Deleted Successfully')
        })
    }
   }
    return (
        <div className='mt-5'>
            <Table striped bordered hover>
            <thead className=''>
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
       item.map(item=><tr key={item._id}>

<td>{item._id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} className='img-thumbnail img-rounded'  id='img-product' alt="" srcSet="" /></td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.supplier}</td>
                <td>{item.quantity}</td>
                <td><button  className='btn btn-danger' onClick={()=>deleteItem(item._id)} >Delete</button></td>
       </tr>)

      }
  
 
 
  </tbody>
</Table>
<div className='align-item-center d-flex justify-content-center'>
  <button className='btn btn-success' onClick={redirectAddInventory}>Add Item</button>
</div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

        </div>
    );
};

export default ManageInventory;