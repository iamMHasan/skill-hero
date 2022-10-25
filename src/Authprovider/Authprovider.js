import React, { useEffect } from 'react';
import { createContext } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app) 
export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const [user, setUser] = useState('')
    // google auth
    const googleProvider = new GoogleAuthProvider()
    // method for google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // mehthod for logout
    const logOutFromAll = () => {
        return signOut(auth)
    }
    // onauth state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> unsubscribed()
    },[])
    const authInfo = {user,loginWithGoogle,logOutFromAll}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;