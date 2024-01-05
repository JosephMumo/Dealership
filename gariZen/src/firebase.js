// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX_L_z1fSPLUwZnCutyu4F8GK5m7I91vo",
  authDomain: "garizenmotors.firebaseapp.com",
  projectId: "garizenmotors",
  storageBucket: "garizenmotors.appspot.com",
  messagingSenderId: "457546471527",
  appId: "1:457546471527:web:ad022b8f21a7565d3c1cc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)