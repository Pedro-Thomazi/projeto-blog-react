// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB-jbe41EB0MtMT5alFdVxg_zcr4jk-cM",
    authDomain: "mini-blog-react-3b5ee.firebaseapp.com",
    projectId: "mini-blog-react-3b5ee",
    storageBucket: "mini-blog-react-3b5ee.appspot.com",
    messagingSenderId: "398987742997",
    appId: "1:398987742997:web:dbf1df750f169bdce2e31c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }