import React from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;