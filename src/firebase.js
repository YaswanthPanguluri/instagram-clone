import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB74j_BZFcwsRrkKWWwKUj-ocZUzNVURLU",
  authDomain: "insta-clone-react-55821.firebaseapp.com",
  projectId: "insta-clone-react-55821",
  storageBucket: "insta-clone-react-55821.appspot.com",
  messagingSenderId: "1008435657323",
  appId: "1:1008435657323:web:7206eba1909abecf938f2e",
  measurementId: "G-GYH6GBH1C6",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();


export { db,storage,auth};
