// import React from "react";
// import { auth } from "../../firebase/firebase.utils";
// import Modal from "../modal/modal.component";
// import firebase from "firebase/app";
// import "firebase/firestore"; //database

// class Facebook extends React.Component {
//   constructor() {
//     super();
//   }
//   //   componentDidMount() {
//   //     const facebookProvider = new firebase.auth.FacebookAuthProvider();
//   //     const yup = async () => {
//   //       try {
//   //         await auth.signInWithPopup(facebookProvider);
//   //       } catch (error) {
//   //         if (error.code === "auth/account-exists-with-different-credential") {
//   //           console.log("yeah doesnt work ffs");
//   //           var pendingCred = error.credential;
//   //           //facebook.com
//   //           var email = error.email;
//   //           // Get sign-in methods for this email.
//   //           auth.fetchSignInMethodsForEmail(email).then(function(methods) {
//   //             if (methods[0] === "google.com") {
//   //               console.log("eheheheheheh");
//   //               return (
//   //                 <div>
//   //                   <Modal />
//   //                 </div>
//   //               );
//   //               // auth
//   //               //   .signInWithRedirect(googleProvider)
//   //               //   .then(function(user) {
//   //               //     console.log(user);
//   //               //     return user.credential(pendingCred);
//   //               //   })
//   //               //   .then(function() {
//   //               //     console.log("successful");
//   //               //   });
//   //             }
//   //             return;
//   //           });
//   //         }
//   //       }
//   //     };
//   //   }
//   render() {
//     return <div>hi</div>;
//     //   const facebookProvider = new firebase.auth.FacebookAuthProvider();
//     //   try {
//     //     await auth.signInWithPopup(facebookProvider);
//     //   } catch (error) {
//     //     if (error.code === "auth/account-exists-with-different-credential") {
//     //       console.log("yeah doesnt work ffs");
//     //       var pendingCred = error.credential;
//     //       //facebook.com
//     //       var email = error.email;
//     //       // Get sign-in methods for this email.
//     //       auth.fetchSignInMethodsForEmail(email).then(function(methods) {
//     //         if (methods[0] === "google.com") {
//     //           console.log("eheheheheheh");
//     //           return (
//     //             <div>
//     //               <Modal />
//     //             </div>
//     //           );
//     //           // auth
//     //           //   .signInWithRedirect(googleProvider)
//     //           //   .then(function(user) {
//     //           //     console.log(user);
//     //           //     return user.credential(pendingCred);
//     //           //   })
//     //           //   .then(function() {
//     //           //     console.log("successful");
//     //           //   });
//     //         }
//     //         return;
//     //       });
//     //     }
//     // }
//   }
// }

// export default Facebook;
