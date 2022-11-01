import {getApp , getApps , initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCfkSC9FkZa0ZxMCYCyiN0GcewqxqCQtFM",
    authDomain: "foodapp-ed47e.firebaseapp.com",
    databaseURL: "https://foodapp-ed47e-default-rtdb.firebaseio.com",
    projectId: "foodapp-ed47e",
    storageBucket: "foodapp-ed47e.appspot.com",
    messagingSenderId: "447637324671",
    appId: "1:447637324671:web:9d07d576d94af9842e104a",
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export{app , firestore , storage};
