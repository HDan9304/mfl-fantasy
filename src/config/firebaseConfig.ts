import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyCpFfFk1ysXWbzR_nItEP21wokOzCUaVDo",
  authDomain: "mfl-fantasy-league.firebaseapp.com",
  projectId: "mfl-fantasy-league",
  storageBucket: "mfl-fantasy-league.firebasestorage.app",
  messagingSenderId: "804856485779",
  appId: "1:804856485779:web:cc9c4ae6bbd5d552967a66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);