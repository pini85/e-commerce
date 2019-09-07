import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA30gN3jQR0hPxIhIG_SqLHDSgQyMmOifo",
  authDomain: "e-commerce-a4d89.firebaseapp.com",
  databaseURL: "https://e-commerce-a4d89.firebaseio.com",
  projectId: "e-commerce-a4d89",
  storageBucket: "",
  messagingSenderId: "640772380951",
  appId: "1:640772380951:web:a022fe7adb646e3e0b7f52"
};

firebase.initializeApp(config);
export const test = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// This gives us access to the new google provider class
const provider = new firebase.auth.GoogleAuthProvider();
// We want to always trigger the Google pop up when ever we use this Google auth provider for authentication and sign in.
provider.setCustomParameters({ prompt: "select_account" });
//We want to only give them the provider wihch is google. We also have twitter facebook etc.
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
