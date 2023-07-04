import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB74j_BZFcwsRrkKWWwKUj-ocZUzNVURLU",
  authDomain: "insta-clone-react-55821.firebaseapp.com",
  projectId: "insta-clone-react-55821",
  storageBucket: "insta-clone-react-55821.appspot.com",
  messagingSenderId: "1008435657323",
  appId: "1:1008435657323:web:7206eba1909abecf938f2e",
  measurementId: "G-GYH6GBH1C6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
