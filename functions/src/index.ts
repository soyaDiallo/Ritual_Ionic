import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import * as firebase from 'firebase';
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  console.log("fonction declenchée!!!!!!!!!!!!!")
});

exports.sendByeEmail = functions.auth.user (). onDelete ((user) => {
  console.log("fonction supprimer declenchée!!!!!!!!!!!!!")
});

exports.myFunctionTest = functions.firestore
  .document('user/test')
  .onWrite((change, context) => { 
    admin.firestore().collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
  })
  .then(()=> {
      console.log("Document successfully written!");
  })
  .catch((error)=> {
      console.error("Error writing document: ", error);
  });
  
  });

