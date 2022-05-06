import {useEffect,useState} from 'react';
const useToken=user=>{
    const [token,setToken]=useState('');
    useEffect(() => {
        const getToken=()=>{
            const url = `http://localhost:5000/login`; 
             const email=user?.user?.email;
          console.log(user);
          console.log(email);


    if(email){

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