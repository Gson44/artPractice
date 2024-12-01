// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjVwHFZNtdv0B4V8iaVGoMgJUxcNQ5dRc",
  authDomain: "artpractice-47976.firebaseapp.com",
  projectId: "artpractice-47976",
  storageBucket: "artpractice-47976.firebasestorage.app",
  messagingSenderId: "179333590216",
  appId: "1:179333590216:web:b670a787dc4429a49449fd",
  measurementId: "G-X6ZJJ8D46F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//console.log(app)
//console.log(analytics)

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
//console.log(storage)

