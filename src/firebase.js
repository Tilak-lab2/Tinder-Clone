// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC1newn8pdCHbmJp3VIe4VgGbroH-Grq3s",
    authDomain: "tinder-80d31.firebaseapp.com",
    projectId: "tinder-80d31",
    storageBucket: "tinder-80d31.appspot.com",
    messagingSenderId: "941706103810",
    appId: "1:941706103810:web:527f243aed8a849b002b1b",
    measurementId: "G-DRW05W6KLT"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const database=firebase.firestore()

  export default database