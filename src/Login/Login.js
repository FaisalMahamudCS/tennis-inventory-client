import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { BsGoogle } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const location=useLocation();
    const navigate=useNavigate();
    let errorPara;
    let googleError;
//sign in
const [ signInWithEmailAndPassword, user,loading, error,] = useSignInWithEmailAndPassword(auth);
const [sendPasswordResetEmail, sending,error1] = useSendPasswordResetEmail(auth);

//google signin
const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);
const [token]=useToken(user ||user1);
//redirection
let from=location.state?.from?.pathname || '/';
//login handle 
const loginSubmit=async(event)=>{
    event.preventDefault();
    
   await signInWithEmailAndPassword(email,password);
    
}
//password reset
const resetPassword=async()=>{
   await sendPasswordResetEmail(email);
   
   toast.success('Password Reset Link Send')
}
const  googleSignIn=()=>{
    signInWithGoogle();
}
//register redirect
const registerRedirect=()=>{
  navigate('/register');
}

 if(loading ||loading1){
     return <LoadingSpinner></LoadingSpinner>
}

if(error){
  errorPara=<p className='text-danger' >Error{error.message}</p>
}
if (error2){
  googleError=<p className='text-danger'>Error{error2.message}</p>
}

if(token){
  navigate(from,{replace:true});
 
}

if(user || user1 ){
    
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
  <p className='text-danger'>{errorPara}</p>
  <p className='text-danger'>{googleError}</p>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
<div className="d-flex align-content-center justify-content-center">
<button onClick={resetPassword} className='text-decoration-none btn btn-link  text-dark'>Reset Password</button>
<button onClick={registerRedirect} className='text-decoration-none btn btn-link  text-dark'>New ?Register</button>
</div>
<button onClick={googleSignIn} className='text-decoration-none btn btn-link  text-dark'><BsGoogle/> Google Sign In</button>
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

export default Login;