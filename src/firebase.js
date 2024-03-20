// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1RkxgYJ8_xuo8FNUeJPImX-qlmrNTUAU",
  authDomain: "chat-app-a07aa.firebaseapp.com",
  projectId: "chat-app-a07aa",
  storageBucket: "chat-app-a07aa.appspot.com",
  messagingSenderId: "409483613234",
  appId: "1:409483613234:web:301fadede1d2296f2a182b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {app, auth};