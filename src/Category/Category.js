import React from 'react';
import { Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';

import useCategory from '../Hooks/useCategory';
import { BiCategoryAlt } from 'react-icons/bi'

const Category = () => {
    const [category,setCategory]=useCategory();
  
   
 //   console.log(categories);
    return (
        // <section className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category'>
        <section  className='d-flex justify-content-center align-items-center h-100 min-vh-100 bg-category ' >
        <div className='container '>
            <h4 className='text-center p-1 '>Category <BiCategoryAlt /></h4>
            <Row xs={1} md={3} className="g-4">
            {
             category.map(category=> <Categories category={category}  ></Categories>)
            }
            </Row>
        </div>
        </section>
    );
};

export default Category;