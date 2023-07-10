import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //Get your firebase keys here

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")