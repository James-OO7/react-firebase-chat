import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-98594.firebaseapp.com",
  projectId: "reactchat-98594",
  storageBucket: "reactchat-98594.firebasestorage.app",
  messagingSenderId: "343571415633",
  appId: "1:343571415633:web:5e3659c0aa346306b7ae70",
  measurementId: "G-1XV9CBD7CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()