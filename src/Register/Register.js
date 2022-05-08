import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../firebase.init';
import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useToken from '../Hooks/useToken';
const Register = () => {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const location=useLocation();
    const navigate=useNavigate();
    console.log(email)

    const [createUserWithEmailAndPassword,  user,loading, error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
;
    const handleRegisterAuth=(event)=>{
 event.preventDefault();
 createUserWithEmailAndPassword(email,password);

}
const [token]=useToken(user);
 console.log(error);
 let from=location.state?.from?.pathname || '/';

 if(token){
    navigate(from,{replace:true});
    }
 if(loading){
     return <LoadingSpinner></LoadingSpinner>
 }
    
    return (
        <div className='col col-md-6 card mx-auto mt-5'>
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
  <button type='submit' className='btn btn-dark'>Register</button>
</Form>
<Link className='btn btn-dark p-2' to='/login'>Login </Link>
        </div>
    );
};

export default Register;