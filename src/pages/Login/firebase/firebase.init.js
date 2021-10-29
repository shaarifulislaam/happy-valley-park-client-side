import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthenticationInitialize = () => {
  initializeApp(firebaseConfig);
};

export default firebaseAuthenticationInitialize;
