import React from 'react';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Item></Item> 
              <Category></Category> 
            <Footer></Footer>

            
        </div>
    );
};

export default Home;