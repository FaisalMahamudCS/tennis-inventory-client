import React from 'react';
import './NotFound.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate=useNavigate()
    const   HomeNavigation=()=>{
        navigate('/');
        //go to inventory detail
        }

    return (
        <div >
            <div id='contain' className="text-center mt-5">

         <h2 id='h2 ' className='mb-3'>404</h2>
          
        <h4 id='not-p ' className='mb-3'> Opps! 404 Not Found</h4>
          <p id='not-p' className='mb-3'>The page you are looking for that doesn't exist.You have entered wrong URL</p>
          <button className='button-card' onClick={HomeNavigation}>Go Back Home</button>






            </div>
        </div>
    );
};

export default NotFound;