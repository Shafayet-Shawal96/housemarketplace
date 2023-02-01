import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq4Z7Xg41_WIADQtQfJjGR8mq27yQBaxM",
  authDomain: "house-market-place-dcba4.firebaseapp.com",
  projectId: "house-market-place-dcba4",
  storageBucket: "house-market-place-dcba4.appspot.com",
  messagingSenderId: "730786097460",
  appId: "1:730786097460:web:ab6eb843237a6db716dd61",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
