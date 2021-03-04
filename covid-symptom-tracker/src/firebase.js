import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDr39zbMS2hjBJY7QOvWARkpKl5ayqiKlY",
    authDomain: "covid-project-4f95e.firebaseapp.com",
    projectId: "covid-project-4f95e",
    storageBucket: "covid-project-4f95e.appspot.com",
    messagingSenderId: "275828688942",
    appId: "1:275828688942:web:c52ba867e89a192e5f77bf"
};
firebase.initializeApp(config);
export default firebase;