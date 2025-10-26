import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4IZUaCAN2B-KLf8mAEAf2RiM4mLmr_js",
  authDomain: "chiryo-57131.firebaseapp.com",
  projectId: "chiryo-57131",
  storageBucket: "chiryo-57131.firebasestorage.app",
  messagingSenderId: "344657994497",
  appId: "1:344657994497:web:3d359380c478624d333100",
  measurementId: "G-YPKD7E15VD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();