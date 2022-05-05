import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddInventoryItem = () => {
  const [user]=useAuthState(auth);
    const [name,setName]=useState();
    const email=user.email;
    const [image,setImage]=useState();
    const [description,setDescription]=useState();
    const [price,setPrice]=useState();
    const [quantity,setQuantity]=useState();
    const [supplier,setSupplier]=useState();
    const [category,setCategory]=useState();
    const addInventoryHandle=(event)=>{
        event.preventDefault();
      
        const data={email,name,image,description,price,quantity,supplier,category};
        const url = `http://localhost:5000/item`;
      try{
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('item added successfully!!!');
           
        })
      }
      catch(error){
        console.log(error)

      }

        console.log(data)
    }
    return (
        <div>
             <div className='w-50 card mx-auto mt-5'>
            <Form onSubmit={addInventoryHandle} className='m-5'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} placeholder="Enter Mail" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label> Name</Form.Label>
    <Form.Control type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Photo URL </Form.Label>
    <Form.Control type="text" onChange={(event)=>setImage(event.target.value)} placeholder="Enter PhotoURL" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" onChange={(event)=>setDescription(event.target.value)} placeholder="Enter Description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" onChange={(event)=>setPrice(event.target.value)} placeholder="Enter Price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" onChange={(event)=>setQuantity(event.target.value)} placeholder="Enter Quantity" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Supplier</Form.Label>
    <Form.Control type="text" onChange={(event)=>setSupplier(event.target.value)} placeholder="Enter Supplier" />
  </Form.Group>



  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" onChange={(event)=>setCategory(event.target.value)} placeholder="Enter Category" />
  </Form.Group>














  
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>

        </div>
        </div>
    );
};

export default AddInventoryItem;