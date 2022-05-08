import {useEffect,useState} from 'react';
const useToken=user=>{
    //use token
    const [token,setToken]=useState('');
    useEffect(() => {
        const getToken=()=>{
            const url = `https://pure-beach-56668.herokuapp.com/login`; 
             const email=user?.user?.email;
          console.log(user);
          console.log(email);


    if(email){
//if mail exist
        const emails={email};
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(emails)
            })
            .then(res => res.json())
            .then(data =>{
                setToken(data.accessToken);
                console.log('success', data);
                localStorage.setItem('accessToken',data.accessToken)
            
               // alert('item added successfully!!!');
            //    navigate(from,{replace:true});
               
            })   
        } 
        }
        getToken()
   
    },[user])
    
return [token]
}
export default useToken;