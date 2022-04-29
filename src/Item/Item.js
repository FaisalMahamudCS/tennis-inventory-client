import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useItem from '../Hooks/useItem';
import Items from '../Items/Items';

const Item = () => {
    const [item,setItem]=useItem();
   // const items=item.slice(0,6);
    return (
        <div>
           <Row xs={1} md={3} className="g-4">
          
{
    item.slice(0,6).map(item=><Items item={item}></Items>)
}
</Row> 
        </div>
    );
};

export default Item;