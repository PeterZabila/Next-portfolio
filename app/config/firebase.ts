import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXa3DS99lpl8PCy4RrRlXsKECaKKzCqOA",
  authDomain: "gallery-a1a3a.firebaseapp.com",
  projectId: "gallery-a1a3a",
  storageBucket: "gallery-a1a3a.appspot.com",
  messagingSenderId: "365451630465",
  appId: "1:365451630465:web:51525d83399234332cba80",
  measurementId: "G-QMZSNPDH0S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()