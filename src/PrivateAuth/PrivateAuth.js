import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PrivateAuth = ({children}) => {
    const [user,loading,error]=useAuthState(auth);
    

    return (
       

        <div>
            
        </div>
    );
    return children;
};

export default PrivateAuth;