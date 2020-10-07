import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCTGtMWWNyviNpz9OGlk2Vcx1mIlF8BBJ0",
  authDomain: "tutorial-template.firebaseapp.com",
  databaseURL: "https://tutorial-template.firebaseio.com",
  projectId: "tutorial-template",
  storageBucket: "tutorial-template.appspot.com",
  messagingSenderId: "605031682192",
  appId: "1:605031682192:web:4f5e9ac73ff98ac4cd4815",
  measurementId: "G-PMVW5H6PHL",
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  console.log("generateDoc", user, additionalData);

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists || additionalData) {
    const { email, displayName, photoURL } = user;

    console.log("generateDoc", user, additionalData, snapshot, userRef);
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    console.log("docs", userDocument.data());
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
