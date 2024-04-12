import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-cbaa5.firebaseapp.com",
  projectId: "chatapp-cbaa5",
  storageBucket: "chatapp-cbaa5.appspot.com",
  messagingSenderId: "329293805863",
  appId: "1:329293805863:web:8c703b24f6f84cb6535102",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
