import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSHpvMjTlpU5jqIK56q01MtZyKZuiI-F0",
    authDomain: "productivity-counter-f8fed.firebaseapp.com",
    databaseURL: "https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "productivity-counter-f8fed",
    storageBucket: "productivity-counter-f8fed.appspot.com",
    messagingSenderId: "993104967686",
    appId: "1:993104967686:web:0ed07f89d714b18de62b87",
    measurementId: "G-FT8B6494T4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;