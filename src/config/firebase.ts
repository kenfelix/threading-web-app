// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsNWwA2Gnq0Eh9nYyaSY8tfQh7NJlgivI",
  authDomain: "threading-b223f.firebaseapp.com",
  projectId: "threading-b223f",
  storageBucket: "threading-b223f.appspot.com",
  messagingSenderId: "203772021086",
  appId: "1:203772021086:web:9e40ffd16d01f2434567cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }

export default app