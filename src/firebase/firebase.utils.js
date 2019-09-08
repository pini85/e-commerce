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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //get a reference of the userAuth id in our database
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //get a snapShot of the documentReference
  const snapShot = await userRef.get();

  //If it does not exist. Meaning it is new data
  if (!snapShot.exists) {
    //Get the information we interested in saving in our database
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    // We will do an asycouronous call to our database and try and catch the call.
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //We want to return the userRef because we may need it to do other things.
  return userRef;
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

/*
Collection => Reference(Remember how firebase database works!)

QueryReference & QuerySnapShot
Firestorm returns us two types of objects: references and snapshots.

QueryReference object is an object that represents the "current" place in the database that we are querying.
firestore.doc('/users/:userld');
QueryReference doesn't have the actual data but has details about it. Like if it exists or not or the method to get the SnapShot object.
With the DocumentReference we can perform the crud operations on. .set(),/get(),.update(),.delete()
When we retreive a document .get(), we are getting a snapshot of the document. eg. documentRef.get()
With the snapshot we can determined with our code if there is any data in it.

SnapShot gives us the id and if it exist or not. But doesnt give the actual data in our data base. to do this you need to call snapShot.data();

 */
