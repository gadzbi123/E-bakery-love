import { getAnalytics } from "firebase/analytics";
import { FirebaseError, initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAuPpHli5V-AX835He-yzWRBs5FbN1Xl6Y",
  authDomain: "e-bakery-love.firebaseapp.com",
  projectId: "e-bakery-love",
  storageBucket: "e-bakery-love.appspot.com",
  messagingSenderId: "326414983521",
  appId: "1:326414983521:web:395ab76f1a1e5f9472e520",
  measurementId: "G-2DCCHTEF7F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup",
});

const auth = getAuth();
export const signInWithFacebookPopup = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    console.log(user);

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    console.log(credential);
  } catch (error) {
    console.log(error);
    FacebookAuthProvider.credentialFromError(error as FirebaseError);
  }
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
