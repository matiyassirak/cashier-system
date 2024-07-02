// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi69vpwPaOAAiZDb468Wn_OxsNylMt1y0",
  authDomain: "sabh-r.firebaseapp.com",
  databaseURL: "https://sabh-r-default-rtdb.firebaseio.com",
  projectId: "sabh-r",
  storageBucket: "sabh-r.appspot.com",
  messagingSenderId: "805148603606",
  appId: "1:805148603606:web:45ac2df73aa3cbf51e0577",
  measurementId: "G-LDKS16761Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const database = getDatabase();

const firebase = {
  database,
  ref,
  onValue,
};

// import { getDatabase, ref, onValue } from "firebase/database";

//  export default {initializeApp, getAnalytics, getDatabase};
export default firebase;

// export default initializeApp;
// export default initializeApp;
// const db = getDatabase();
// const starCountRef = ref(db, 'orders');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.debug(data)
//   // updateStarCount(postElement, data);
// });
