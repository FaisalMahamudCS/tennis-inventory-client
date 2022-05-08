import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CategoryWiseProducts from '../CategoryWiseProducts/CategoryWiseProducts';

const CategoryWiseProduct = () => {
    const [categoryProduct,setCategoryProduct]=useState([]);
    const {category}=useParams();
    useEffect(()=>{
     fetch(`https://pure-beach-56668.herokuapp.com/category/${category}`)
     .then(res=>res.json())
     .then(data=>setCategoryProduct(data))
    
    },[categoryProduct] 
    
    ) 
    return (
        <section className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category'>
        <div className='container'>
            <h4 className='m-3 text-center'>Top Products</h4>
           <Row xs={1} md={3} className="g-4">
         

          
 {
categoryProduct.map(categoryProduct=> <CategoryWiseProducts  categoryProduct={categoryProduct} key={categoryProduct._id} ></CategoryWiseProducts>)
    
    //  loading ? <LoadingSpinner></LoadingSpinner>: item.slice(0,6).map(item=><Items item={item} key={item._id}></Items>)
    // item.slice(0,6).map(item=><Items item={item} key={item._id}></Items>)
} 
</Row> 
        </div>
        </section>
    );
};

export default CategoryWiseProduct;