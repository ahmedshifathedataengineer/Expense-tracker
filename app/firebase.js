// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArakBOomQlqn1gD8Bnxd54vTOIT46BNpQ",
  authDomain: "expense-tracker-a8ecf.firebaseapp.com",
  projectId: "expense-tracker-a8ecf",
  storageBucket: "expense-tracker-a8ecf.appspot.com",
  messagingSenderId: "583376601454",
  appId: "1:583376601454:web:bb354a27fed5b70ce3c17f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)