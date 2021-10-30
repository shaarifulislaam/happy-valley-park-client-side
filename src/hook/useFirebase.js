import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import firebaseAuthenticationInitialize from "../pages/Login/firebase/firebase.init";

firebaseAuthenticationInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [control, setControl] = useState(false);

  const auth = getAuth();

  //google sign in
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  //observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setUser,
    control,
    setControl,
  };
};

export default useFirebase;
