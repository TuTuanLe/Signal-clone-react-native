import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCb-bVmeTCl64nSDeGQkluJ6dXd7a8M5pA",
  authDomain: "signal-clone-uit.firebaseapp.com",
  projectId: "signal-clone-uit",
  storageBucket: "signal-clone-uit.appspot.com",
  messagingSenderId: "879000121185",
  appId: "1:879000121185:web:a2aee7d739388d2d625f20",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
