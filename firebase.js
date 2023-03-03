// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIf7HClBX6Zf-hO2_0iswvOpRTfZz5t-A",
  authDomain: "nightlife-a875c.firebaseapp.com",
  projectId: "nightlife-a875c",
  storageBucket: "nightlife-a875c.appspot.com",
  messagingSenderId: "400564586067",
  appId: "1:400564586067:web:ded176a8a572f6325ba8a6",
  measurementId: "G-6YTWBVQG9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);