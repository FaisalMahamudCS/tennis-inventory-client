import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../firebase.init';
import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Register = () => {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    console.log(email)
 const navigation=useNavigate();
    const [createUserWithEmailAndPassword,  user,loading, error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const handleRegisterAuth=(event)=>{
 event.preventDefault();
 createUserWithEmailAndPassword(email,password);
 
 console.log(error);
 
 if(loading){
     return <LoadingSpinner></LoadingSpinner>
 }
    }
    return (
        <div className='w-50 card mx-auto mt-5'>
            <Form  className='m-5' onSubmit={handleRegisterAuth}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required onChange={(event)=>setEmail(event.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword" required>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
  </Form.Group>
  <p className='text-danger'>{error}</p>
  <button type='submit' className='btn btn-success'>Register</button>
</Form>
<Link  to='/login'>Login </Link>
        </div>
    );
};

export default Register;