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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// This gives us access to the new google provider class
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
// We want to always trigger the Google pop up when ever we use this Google auth provider for authentication and sign in.
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ prompt: "Login with Facebook!!!!" });
//We want to only give them the provider wihch is google. We also have twitter facebook etc.
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);
// export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export const signInWithFacebook = async () => {
  try {
    await auth.signInWithPopup(facebookProvider);
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      console.log("yeah doesnt work ffs");
      // Step 2.
      // User's email already exists.
      // The pending Facebook credential.
      // var pendingCred = error.credential;
      // // The provider account's email address.
      // var email = error.email;
      // // Get sign-in methods for this email.
      // auth.fetchSignInMethodsForEmail(email).then(function(methods) {
      //   //method === google.com
      //   // Step 3.
      //   // If the user has several sign-in methods,
      //   // the first method in the list will be the "recommended" method to use.
      //   if (methods[0] === "password") {
      //     // Asks the user their password.
      //     // In real scenario, you should handle this asynchronously.
      //     var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
      //     auth
      //       .signInWithEmailAndPassword(email, password)
      //       .then(function(user) {
      //         // Step 4a.
      //         return user.linkWithCredential(pendingCred);
      //       })
      //       .then(function() {
      //         // Facebook account successfully linked to the existing Firebase user.
      //         goToApp();
      //       });
      //     return;
      //   }
      //   // All the other cases are external providers.
      //   // Construct provider object for that provider.
      //   // TODO: implement getProviderForProviderId.
      //   var provider = getProviderForProviderId(methods[0]);
      //   // At this point, you should let the user know that he already has an account
      //   // but with a different provider, and let him validate the fact he wants to
      //   // sign in with this provider.
      //   // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
      //   // so in real scenario you should ask the user to click on a "continue" button
      //   // that will trigger the signInWithPopup.
      //   auth.signInWithPopup(provider).then(function(result) {
      //     // Remember that the user may have signed in with an account that has a different email
      //     // address than the first one. This can happen as Firebase doesn't control the provider's
      //     // sign in flow and the user is free to login using whichever account he owns.
      //     // Step 4b.
      //     // Link to Facebook credential.
      //     // As we have access to the pending credential, we can directly call the link method.
      //     result.user
      //       .linkAndRetrieveDataWithCredential(pendingCred)
      //       .then(function(usercred) {
      //         // Facebook account successfully linked to the existing Firebase user.
      //         goToApp();
      //       });
      //   });
      // });
    }
  }
};

export default firebase;

// andleSubmit = async event => {
//   event.preventDefault();
//   try {
//     const { email, password } = this.state;
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (error) {
//     this.errorMessage(error);
//   }

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
