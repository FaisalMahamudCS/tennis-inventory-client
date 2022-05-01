import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MyItems from '../MyItems/MyItems';
const MyItem = () => {
    const [user]=useAuthState(auth);
    const email=user.email;
    const [myitem,setMyItem]=useState([]);
    useEffect(()=>{
     fetch(`http://localhost:5000/myitem?email=${email}`)
     .then(res=>res.json())
     .then(data=>setMyItem(data))
    },[email] )
    const {_id,name,image,description,price,quantity,supplier}=myitem;
    
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
       myitem.map(myitem=><tr key={myitem._id}>

<td>{myitem._id}</td>
                <td>{myitem.name}</td>
                <td><img src={image} className='img-thumbnail img-rounded'  id='img-product' alt="" srcSet="" /></td>
                <td>{myitem.description}</td>
                <td>{myitem.price}</td>
                <td>{myitem.supplier}</td>
                <td>{myitem.quantity}</td>
                <td><button  className='btn btn-danger' >Delete</button></td>
       </tr>)
      }
  
 
 
  </tbody>
</Table>
        </div>
    );
};

export default MyItem;