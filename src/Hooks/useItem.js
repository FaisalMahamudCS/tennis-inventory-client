import {useEffect,useState} from 'react';
const useItem=()=>{
    const [item,setItem]=useState([]);
    useEffect(()=>{
        //item fetch 
     fetch('https://pure-beach-56668.herokuapp.com/item')
     .then(res=>res.json())
     .then(data=>setItem(data))
    },[item] ) 
    return [item,setItem]

}
export default useItem;