import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import firebase from "firebase/app";
// let firebase = Firebase.default;

const setting = { timestampsInSnapshots: true }

const config = {
    apiKey: "AIzaSyBwkut8s7gW3213wNnxJUkGHd41HUoUgcg",
    authDomain: "todolistpractice-df8c0.firebaseapp.com",
    databaseURL: "https://todolistpractice-df8c0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolistpractice-df8c0",
    storageBucket: "todolistpractice-df8c0.appspot.com",
    messagingSenderId: "883060790362",
    appId: "1:883060790362:web:9753291c522096fbacf463",
    measurementId: "G-99R0TRJ7TB"
}

// console.log('firebase',firebase);
firebase.initializeApp(config);

let firebaseDB = firebase.database();
export default firebaseDB;