import {useEffect,useState} from 'react';
const useCategory=()=>{
    const [category,setCategory]=useState([]);
    useEffect(()=>{
     fetch('https://pure-beach-56668.herokuapp.com/category')
     .then(res=>res.json())
     .then(data=>setCategory(data))
    },[] ) 
    return [category,setCategory]

}
export default useCategory;