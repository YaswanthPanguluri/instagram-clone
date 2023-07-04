//import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyComW_QsRhj8muSmdb8E6XKsmjecKFQtxo",
    authDomain: "instagram-clone-67bee.firebaseapp.com",
    projectId: "instagram-clone-67bee",
    storageBucket: "instagram-clone-67bee.appspot.com",
    messagingSenderId: "307407012428",
    appId: "1:307407012428:web:41fa02ebc3f941471d6ae9",
    measurementId: "G-D50M337CCX"
});
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()


export {db,auth,storage};