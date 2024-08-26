import React from 'react';
import {createContext, useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    
    // Function for logging in a user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function for Track user state
    useEffect(() =>{
       const unsubsCribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })

        // Cleanup subscription on unmount
        return () => unsubsCribe()
    },[])


    const authInfo = {auth, user,  loginUser}
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;