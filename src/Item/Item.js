import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useItem from '../Hooks/useItem';
import Items from '../Items/Items';

const Item = () => {
    const [item,setItem]=useItem();
   
   // const items=item.slice(0,6);
    return (
        <section className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category'>
        <div className='container'>
            <h4 className='m-3 text-center'>Top Products</h4>
           <Row xs={1} md={3} className="g-4">
         

          
 {
    item.slice(0,6).map(item=><Items item={item} key={item._id}></Items>)
} 
</Row> 
        </div>
        </section>
    );
};

export default Item;