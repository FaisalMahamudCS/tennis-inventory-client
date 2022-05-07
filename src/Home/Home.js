import React from 'react';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import SupplierChart from '../SupplierChart/SupplierChart';


const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <Banner></Banner>
             <Item></Item> 
              <Category></Category> 
            <SupplierChart></SupplierChart>
            <Footer></Footer>
            

            
        </div>
    );
};

export default Home;