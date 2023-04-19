// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgeFHy6gv7V-P7vL-LnoNeWbPvR5ubLo",
  authDomain: "buoi2-6849f.firebaseapp.com",
  databaseURL: "https://buoi2-6849f-default-rtdb.firebaseio.com",
  projectId: "buoi2-6849f",
  storageBucket: "buoi2-6849f.appspot.com",
  messagingSenderId: "748319730358",
  appId: "1:748319730358:web:87cb4985d386bddc1cd417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
