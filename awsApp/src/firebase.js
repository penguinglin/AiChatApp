import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw49dZgJ2ALrPnTbTsS-fVv7-DqnCudiM",
  authDomain: "awsai-9c196.firebaseapp.com",
  projectId: "awsai-9c196",
  storageBucket: "awsai-9c196.firebasestorage.app",
  messagingSenderId: "1007125450265",
  appId: "1:1007125450265:web:e584faf0359abb15a56488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
