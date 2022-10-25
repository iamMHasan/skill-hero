import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app) 
export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const [user, setUser] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    // method for google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // mehthod for logout
    const logOutFromAll = () => {
        return signOut(auth)
    }
    // method for github login
    const loginWithGithub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    // method for create user
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    // method for email login
    const loginWithMail = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    // onauth state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> unsubscribed()
    },[])
    const authInfo = {user,loginWithGoogle,logOutFromAll,loginWithGithub,loginWithMail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;