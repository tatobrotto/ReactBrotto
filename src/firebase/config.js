
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsZJUjlP64V9gA00cFMpwGnpgpmlPxOpA",
  authDomain: "brottobackendcoder.firebaseapp.com",
  projectId: "brottobackendcoder",
  storageBucket: "brottobackendcoder.firebasestorage.app",
  messagingSenderId: "725943411782",
  appId: "1:725943411782:web:dba0767057336f24e29647",
  measurementId: "G-93X7CZG2ZZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )