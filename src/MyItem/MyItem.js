import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MyItems from '../MyItems/MyItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';
import { signOut } from 'firebase/auth';

const MyItem = () => {
    const [user,loading]=useAuthState(auth);
    const navigate=useNavigate();
    //const [token]=useToken(user);
    const email=user.email;
    const [myitem,setMyItem]=useState([]);
    useEffect(()=>{
     fetch(`https://pure-beach-56668.herokuapp.com/myitem?email=${email}`,{
       headers:{
           authorization:`bearer ${localStorage.getItem('accessToken')}`
       }  
     })
     .then(res=>{
         if(res.status===401 || res.status===403){
           signOut(auth);
            navigate('/login');
             

         }   
     return    res.json()})
     .then(data=>setMyItem(data))
    },[email] )
    const {_id,name,image,description,price,quantity,supplier}=myitem;
   const  deleteMyItem=(_id)=>{
    const proceed = window.confirm('Are you sure?',_id);
    if(proceed){
        const url = `http://localhost:5000/item/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           
            const remainItem = myitem.filter(myitem => myitem._id !== _id);
            setMyItem(remainItem);
            alert('data deleted',data);
        })
    }
   }
   if(loading){
    return <LoadingSpinner></LoadingSpinner>
}
    return (
        <div>
             <Table striped bordered hover responsive>
            <thead className=''>
            <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Photo</th>
      <th>Description</th>
      <th>Price</th>
      <th>Supplier</th>
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
                <td><button  className='btn btn-danger' onClick={()=>deleteMyItem(myitem._id)} >Delete</button></td>
       </tr>)

      }
  
 
 
  </tbody>
</Table>
        </div>
    );
};

export default MyItem;