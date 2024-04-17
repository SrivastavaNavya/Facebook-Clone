// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDTtGWWQS_oyhw-4Snoo228Qk-tuvGF5Mo",
//     authDomain: "unitynet-d16ff.firebaseapp.com",
//     projectId: "unitynet-d16ff",
//     storageBucket: "unitynet-d16ff.appspot.com",
//     messagingSenderId: "375145540772",
//     appId: "1:375145540772:web:26a4bc0afd659252728a31",
//     measurementId: "G-RKTY0B6DTN"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTtGWWQS_oyhw-4Snoo228Qk-tuvGF5Mo",
  authDomain: "unitynet-d16ff.firebaseapp.com",
  projectId: "unitynet-d16ff",
  storageBucket: "unitynet-d16ff.appspot.com",
  messagingSenderId: "375145540772",
  appId: "1:375145540772:web:26a4bc0afd659252728a31",
  measurementId: "G-RKTY0B6DTN"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export { auth, provider, db, serverTimestamp };
export default db;