import React from 'react';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import SupplierChart from '../SupplierChart/SupplierChart';
import Supplier from '../Supplier/Supplier';

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <Banner></Banner>
             <Item></Item> 
              <Category></Category> 
           <Supplier></Supplier>
           <Footer></Footer>
            

            
        </div>
    );
};
 
export default Home;