import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initializedApp = () => {
    initializeApp(firebaseConfig);
}

export default initializedApp;