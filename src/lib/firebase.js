import firebase from 'firebase/app';
import 'firebase/storage';  

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1boKPLZDdmhYL4ljJq_DBSfkDFHhAT5M",
    authDomain: "lynk-aef8f.firebaseapp.com",
    projectId: "lynk-aef8f",
    storageBucket: "lynk-aef8f.appspot.com",
    messagingSenderId: "526990735924",
    appId: "1:526990735924:web:083de0eec70fe76ba02861",
    measurementId: "G-FT7P6K21HF"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const storage = firebase.storage();

export { storage };
