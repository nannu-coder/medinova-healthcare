import { useEffect, useState } from 'react';
import firebaseAuthentication from '../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


firebaseAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // console.log(user);
            }).catch((error) => {
                setError(error.message)
            })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        googleSignIn,
        githubSignIn,
        logOut
    };
};

export default UseFirebase;