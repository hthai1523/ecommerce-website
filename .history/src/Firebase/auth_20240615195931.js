import { doc, refEqual, setDoc } from "firebase/firestore";
import { auth, firebaseDB } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const { displayName, email, photoURL } = user;
    await setDoc(doc(firebaseDB, "users", user.uid), {
      username: displayName,
      email: email,
      photoURL: photoURL,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const doSignOut = async () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const doPasswordChange = (user, password) => {
  
  return updatePassword(user, password);
};

export const doSendEmailVerification = () => {
  return auth.currentUser.sendEmailVerification({
    url: `${window.location.origin}/home`,
  });
};
