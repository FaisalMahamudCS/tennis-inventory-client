import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
const [sendPasswordResetEmail, sending,error1] = useSendPasswordResetEmail(auth);
//google signin
const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

//redirection
let from=location.state?.from?.pathname || '/';
//login handle 
const loginSubmit=(event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
  // const {data}=
  const emails={email};
  const url = `http://localhost:5000/login`;
  
  fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(emails)
  })
  .then(res => res.json())
  .then(data =>{
      console.log('success', data);
      localStorage.setItem('accessToken',data.accessToken)
     // alert('item added successfully!!!');
     navigate(from,{replace:true});
     
  })
}
const resetPassword=async()=>{
   await sendPasswordResetEmail(email);
   alert('Password Reset Link Send')
}
const  googleSignIn=()=>{
    signInWithGoogle();
}


 if(loading ||loading1){
     return <LoadingSpinner></LoadingSpinner>
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
  <p className='text-danger'>{error}</p>
  <p className='text-danger'>{error2}</p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<button onClick={resetPassword} className='text-decoration-none btn btn-link  text-dark'>Reset Password</button>
<Link to='/register' className='text-decoration-none text-dark text-center'>New? Register</Link>
<button onClick={googleSignIn} className='text-decoration-none btn btn-link  text-dark'>Google Sign In</button>
        </div>
    );
};

export default Login;