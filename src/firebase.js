// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYOFyEo2-Gskr1LKQmkm5c74G77tMn_I",
  authDomain: "chatapp-50abb.firebaseapp.com",
  projectId: "chatapp-50abb",
  storageBucket: "chatapp-50abb.appspot.com",
  messagingSenderId: "913130245510",
  appId: "1:913130245510:web:19e5f4698b41e44d127007",
  measurementId: "G-46X9NEKV48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();