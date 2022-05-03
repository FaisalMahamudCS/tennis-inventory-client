import React from 'react';
import Categories from '../Categories/Categories';
import useCategory from '../Hooks/useCategory';

const Category = () => {
    const [category,setCategory]=useCategory();
    console.log(category)
   
 //   console.log(categories);
    return (
        <div>
            {
             category.map(category=> <Categories category={category}  ></Categories>)
            }
        </div>
    );
};

export default Category;