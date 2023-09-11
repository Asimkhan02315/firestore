import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg3GukqGLjA5G3jwxXIBkVCZ0BzDe-V8c",
  authDomain: "myproject-d4f91.firebaseapp.com",
  projectId: "myproject-d4f91",
  storageBucket: "myproject-d4f91.appspot.com",
  messagingSenderId: "924652204443",
  appId: "1:924652204443:web:08b3959e1cc689a6bcf13e",
  measurementId: "G-WDGDHEG2H6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
