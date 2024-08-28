import React from 'react';
import {createContext, useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)



    // function for create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Function for logging in a user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logout = () =>{
       return signOut(auth)
    }

    // continue with google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // reset password
    const emailPasswordReset = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }


    // send email verification
    // const emailVerification = () =>{
    //     sendEmailVerification()
    // }
    // function for Track user state
    useEffect(() =>{
       const unsubsCribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('user in the auth state change',currentUser);
        })

        // Cleanup subscription on unmount
        return () => unsubsCribe()
    },[])


    const authInfo = { auth, user,  loginUser, createUser, signInWithGoogle, emailPasswordReset, logout }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;