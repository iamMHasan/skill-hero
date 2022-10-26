import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const Authporvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // google login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // github porvider 
    const gitHubProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // sign out 
    const providerLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // email sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // eamil sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     // update user profile
     const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }
    // onauthstate change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribed()
    }, [])

    const authInfo = {updateUserProfile,loading, providerLogin, gitHubProvider, providerLogOut, createUser,signIn, user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authporvider;