// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_F2Qhzo9Mke3XPfMoYuf24yWhxExAWoU",
  authDomain: "notas-en-react.firebaseapp.com",
  projectId: "notas-en-react",
  storageBucket: "notas-en-react.appspot.com",
  messagingSenderId: "154665461301",
  appId: "1:154665461301:web:47e6b42826eaf6c5aa737c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDatos=getFirestore(app)
export const notesCollection=collection(baseDatos,"notes")