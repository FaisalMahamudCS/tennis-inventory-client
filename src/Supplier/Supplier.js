import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Suppliers from '../Suppliers/Suppliers';
const Supplier = () => {
    const [supplier,setSupplier]=useState([]);
    useEffect(()=>{
     fetch('https://pure-beach-56668.herokuapp.com/supplier')
     .then(res=>res.json())
     .then(data=>setSupplier(data))
    },[supplier] ) 
    return (
        <section className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category'>
        <div className='container'>
            <h4 className='m-3 text-center'>Top Supplier</h4>
           <Row xs={1} md={3} className="g-4">
         

          
 {
supplier.map(supplier=> <Suppliers  supplier={supplier} key={supplier._id} ></Suppliers>)
    
 
} 
</Row> 
        </div>
        </section>
    );
};

export default Supplier;