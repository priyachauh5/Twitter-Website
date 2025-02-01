
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLu1XcGyTuoPmAdNZXucg-APt8EPKrwD4",
  authDomain: "twitter-9d02e.firebaseapp.com",
  projectId: "twitter-9d02e",
  storageBucket: "twitter-9d02e.firebasestorage.app",
  messagingSenderId: "1008550515344",
  appId: "1:1008550515344:web:26989ede1abee07cf7be15",
  measurementId: "G-HRP2ZSVL6X"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);