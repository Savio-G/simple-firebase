// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUDAg1Cpm1BJXPEdVVD38paNR1P4LlGAM",
    authDomain: "simple-firebase-64256.firebaseapp.com",
    projectId: "simple-firebase-64256",
    storageBucket: "simple-firebase-64256.appspot.com",
    messagingSenderId: "642292068706",
    appId: "1:642292068706:web:488cc2a5b738f5ee847c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app