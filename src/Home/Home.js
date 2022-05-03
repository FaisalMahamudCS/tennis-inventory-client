import React from 'react';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Item></Item> 
              {/* <Category></Category>  */}
            
        </div>
    );
};

export default Home;