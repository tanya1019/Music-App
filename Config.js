import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFibSIJgbED_EAZGV2TeMf4ZbBSlVwhLw",
  authDomain: "music-app-6c074.firebaseapp.com",
  projectId: "music-app-6c074",
  storageBucket: "music-app-6c074.appspot.com",
  messagingSenderId: "985822846547",
  appId: "1:985822846547:web:6033c8580ec6c370c0f0a6"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };