import { getAuth, onAuthStateChanged, signInWithPopup, getIdToken, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializedApp from "../Firebase/initializedApp";


initializedApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user)
            }
        });
    }, [])

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    return { user, signInUsingGoogle, logOut }
}

export default useFirebase;

