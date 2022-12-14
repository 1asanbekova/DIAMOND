import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxlkZiSM5HLC0jmt8IgHGNfNWkAEU_Qxo",
  authDomain: "icetrend-370cd.firebaseapp.com",
  projectId: "icetrend-370cd",
  storageBucket: "icetrend-370cd.appspot.com",
  messagingSenderId: "160342147100",
  appId: "1:160342147100:web:d85da3264ec20cda769fd9",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
