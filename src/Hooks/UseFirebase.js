import { useEffect, useState } from 'react';
import firebaseAuthentication from '../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";


firebaseAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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

    const handleEmail = e => {
        setEmail(e.target.value);
    }


    const handlePass = e => {
        setPass(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email, pass)

        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                const user = result.user;
                console.log(user);
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
        logOut,
        handleEmail,
        handlePass,
        handleSubmit
    };
};

export default UseFirebase;