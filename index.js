// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG7Zq-_NcLfiFI4ljO-lWx2sIlBysT8hg",
  authDomain: "brgy-starita.firebaseapp.com",
  projectId: "brgy-starita",
  storageBucket: "brgy-starita.appspot.com",
  messagingSenderId: "760944227114",
  appId: "1:760944227114:web:9428f44f2cde1fab3ce453",
  measurementId: "G-5TDZV9WQXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
