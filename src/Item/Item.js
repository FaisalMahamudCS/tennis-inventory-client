import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useItem from '../Hooks/useItem';
import Items from '../Items/Items';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Item = () => {
    const [loading,setLoading]=useState(true);
    // const [item,setItem]=useItem();
    const [item,setItem]=useState([]);
    useEffect(()=>{
     fetch('https://pure-beach-56668.herokuapp.com/item')
     .then(res=>res.json())
     .then(data=>setItem(data))
     setLoading(false);
    },[item] 
    
    ) 


   
   // const items=item.slice(0,6);
    return (
        <section className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category'>
        <div className='container'>
            <h4 className='m-3 text-center'>Top Products</h4>
           <Row xs={1} md={3} className="g-4">
         

          
 {
     loading ? <LoadingSpinner></LoadingSpinner>: item.slice(0,6).map(item=><Items item={item} key={item._id}></Items>)
    // item.slice(0,6).map(item=><Items item={item} key={item._id}></Items>)
} 
</Row> 
        </div>
        </section>
    );
};

export default Item;