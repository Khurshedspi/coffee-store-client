// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGhg07fZz1pq-l6eacxYyIZd8HWcyjAAw",
  authDomain: "coffee-store-b34a5.firebaseapp.com",
  projectId: "coffee-store-b34a5",
  storageBucket: "coffee-store-b34a5.firebasestorage.app",
  messagingSenderId: "917515023217",
  appId: "1:917515023217:web:a4b93652845fa7a90b7cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
