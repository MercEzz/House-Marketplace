import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEmWbdD20G0qtu5nVkeqFxXVtYdVHajQ0",
  authDomain: "home-marketplace-app-6466c.firebaseapp.com",
  projectId: "home-marketplace-app-6466c",
  storageBucket: "home-marketplace-app-6466c.appspot.com",
  messagingSenderId: "395336522615",
  appId: "1:395336522615:web:a1944c3ccacb86f36e5f72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
