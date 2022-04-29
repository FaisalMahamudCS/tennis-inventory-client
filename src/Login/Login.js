import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const location=useLocation();
    const navigate=useNavigate();
//sign in
const [ signInWithEmailAndPassword, user,loading, error,] = useSignInWithEmailAndPassword(auth);

//redirection
let from=location.state?.from?.pathname || '/';
//login handle 
const loginSubmit=(event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
}

if(user){
navigate(from,{replace:true});
}
if(loading){
    return <LoadingSpinner></LoadingSpinner>
}

    return (
        <div className='w-50 card mx-auto mt-5'>
            <Form onSubmit={loginSubmit} className='m-5'>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
  
  </Form.Group>
  <p className='text-danger'>{error}</p>
  <button type='submit' className='btn btn-success'>Login</button>
</Form>
<Link to='/register' className='text-decoration-none text-center'>New?Register</Link>
        </div>
    );
};

export default Login;