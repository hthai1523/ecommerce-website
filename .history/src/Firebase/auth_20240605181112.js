import { auth } from "./Firebase";
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
}

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // result.user
  return result;
};

export const doSignOut = async () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
    return auth.sendPasswordResetEmail(email)
}

export const doPasswordChange = (password) => {
    return auth.currentUser.updatePassword(password)
}

export const doSendEmailVerification = () => {
    return auth.currentUser.sendEmailVerification({
        url: `${window.location.origin}/home`
    })
}

