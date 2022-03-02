import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyCjD4UkGrfzkjG3olKAJYukIO4ppR2N_uA",
  authDomain: "disney-clone-b3973.firebaseapp.com",
  projectId: "disney-clone-b3973",
  storageBucket: "disney-clone-b3973.appspot.com",
  messagingSenderId: "344326977587",
  appId: "1:344326977587:web:c98a5a4f9221b046480b46",
  measurementId: "G-ZWL01ZYF7Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;