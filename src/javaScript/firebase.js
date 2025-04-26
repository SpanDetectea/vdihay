// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMlrKNRW0DwQMedwwU5RP8s7IatcmmTYo",
    authDomain: "vdihay-5a257.firebaseapp.com",
    projectId: "vdihay-5a257",
    storageBucket: "vdihay-5a257.firebasestorage.app",
    messagingSenderId: "311469480071",
    appId: "1:311469480071:web:11a939fc796d7850e70022"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
