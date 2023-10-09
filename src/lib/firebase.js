import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1boKPLZDdmhYL4ljJq_DBSfkDFHhAT5M",
    authDomain: "lynk-aef8f.firebaseapp.com",
    projectId: "lynk-aef8f",
    storageBucket: "lynk-aef8f.appspot.com",
    messagingSenderId: "526990735924",
    appId: "1:526990735924:web:083de0eec70fe76ba02861",
    measurementId: "G-FT7P6K21HF"
};

// Make sure to not initialize more than once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const storage = getStorage(app);

export { storage };
