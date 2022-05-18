// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJ1EdvkoC5fhXC2g5RyBhYMehWk8pKM4",
  authDomain: "fir-auth-53772.firebaseapp.com",
  projectId: "fir-auth-53772",
  storageBucket: "fir-auth-53772.appspot.com",
  messagingSenderId: "945163911985",
  appId: "1:945163911985:web:cdcc2aa9923a2446e0e610"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };