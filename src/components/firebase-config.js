import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBImIZX-ok60bpWle-Asu40pgThT2qA02s",
  authDomain: "orqid-6b37f.firebaseapp.com",
  projectId: "orqid-6b37f",
  storageBucket: "orqid-6b37f.appspot.com",
  messagingSenderId: "293399253279",
  appId: "1:293399253279:web:5a80d5d2ba243f9f12202a",
  measurementId: "G-LJ2PXGPX8K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
