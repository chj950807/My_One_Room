// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeyAqt9Pfmwu_5b63GAVE3FHRJQG6eQCM",
  authDomain: "myoneroomdata.firebaseapp.com",
  projectId: "myoneroomdata",
  storageBucket: "myoneroomdata.appspot.com",
  messagingSenderId: "787830181054",
  appId: "1:787830181054:web:074e8ce3f46fa1fbdc22ef",
  measurementId: "G-ZHFCWK2YB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


