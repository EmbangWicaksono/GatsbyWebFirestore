import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnANqK0E6EMG1QJ66nkjIDn5EJphW4as0",
    authDomain: "firestore-app-70f9e.firebaseapp.com",
    databaseURL: "https://firestore-app-70f9e.firebaseio.com",
    projectId: "firestore-app-70f9e",
    storageBucket: "firestore-app-70f9e.appspot.com",
    messagingSenderId: "926228840399",
    appId: "1:926228840399:web:6cf48c6aa5e41a5282dcba",
    measurementId: "G-1PPRTQYJ73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase