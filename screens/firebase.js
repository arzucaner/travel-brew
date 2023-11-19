import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API",
  authDomain: "flexdiaryapp.firebaseapp.com",
  projectId: "flexdiaryapp",
  storageBucket: "flexdiaryapp.appspot.com",
  messagingSenderId: "760238206685",
  appId: "1:760238206685:web:16180639a55ae2ad8b3534",
  measurementId: "G-YMP37BM22Q",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
