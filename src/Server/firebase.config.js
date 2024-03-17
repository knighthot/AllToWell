// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1t4X4ijFRt3mCfpMk657iIWTr1W62qgA",
  authDomain: "alltowell-5d11e.firebaseapp.com",
  databaseURL: "https://alltowell-5d11e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alltowell-5d11e",
  storageBucket: "alltowell-5d11e.appspot.com",
  messagingSenderId: "61740895189",
  appId: "1:61740895189:web:5c2637a38e10a117d84b5c",
  measurementId: "G-4C5GNL1F5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app