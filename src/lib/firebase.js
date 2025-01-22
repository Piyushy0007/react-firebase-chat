import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c1931.firebaseapp.com",
  projectId: "reactchat-c1931",
  storageBucket: "reactchat-c1931.firebasestorage.app",
  messagingSenderId: "9072210026",
  appId: "1:9072210026:web:b5b635b2c9af2aaa33da13"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()