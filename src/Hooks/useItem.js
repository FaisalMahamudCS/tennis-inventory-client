import {useEffect,useState} from 'react';
const useItem=()=>{
    const [item,setItem]=useState([]);
    useEffect(()=>{
     fetch('item.json')
     .then(res=>res.json())
     .then(data=>setItem(data))
    },[item] ) 
    return [item,setItem]

}
export default useItem;