import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE3Uo07FwMLMRlQMRFROSL3YJhG0Ysnss",
  authDomain: "netflix-mern-project-8b7b5.firebaseapp.com",
  projectId: "netflix-mern-project-8b7b5",
  storageBucket: "netflix-mern-project-8b7b5.appspot.com",
  messagingSenderId: "324317602419",
  appId: "1:324317602419:web:04f8591d4150e81dbf4006",
  measurementId: "G-X6CC2J6T4C"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);