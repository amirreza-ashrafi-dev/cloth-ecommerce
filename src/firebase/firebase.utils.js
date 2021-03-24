import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3AAAswAvIyG5Civ2lhfT8aZHd7YB9RlA",
  authDomain: "cloth-ecommerce-c47b0.firebaseapp.com",
  projectId: "cloth-ecommerce-c47b0",
  storageBucket: "cloth-ecommerce-c47b0.appspot.com",
  messagingSenderId: "797579748096",
  appId: "1:797579748096:web:8c1f6ae5a7cbfc8bd309e5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// save user information after authenticate with google api or sign in form
export const createUSerProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

// for Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
