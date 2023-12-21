import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Config/Firbase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider =new GoogleAuthProvider()
    const gitHubProvider =new GithubAuthProvider()

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }
    const LoginWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }
    const LogOut = () => {

        return signOut()
    }
    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
            })
        }
        return () => {
            return unSubscribe()

        }
    }, [])
    const authInfo = { user, loading, CreateUser, LoginWithGoogle, LoginWithGitHub, LogOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;