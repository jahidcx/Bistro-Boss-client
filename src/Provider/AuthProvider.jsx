import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic =useAxiosPublic();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name,photo)=>{
     return   updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // get token and store it
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    // console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem('accessToken',res.data.token);
                    }
                })
            }
            else{
                // todo: remove token if token stored in the client side : local storage, cashing, in memory
                localStorage.removeItem('accessToken')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        googleLogin,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;