import { auth } from './firebase.jsx';

// Sign In Function
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out Function
export const doSignOut = () =>
  console.log("calling sign out")
  auth.signOut();
  console.log("called sign out")

// Sign Up Function
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Password Reset Function
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change Function
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
