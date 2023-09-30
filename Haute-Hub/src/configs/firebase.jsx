import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDehhJRiyvamY97LMq9jJeDyYCor5M3Uk4",
  authDomain: "buysell-88bdd.firebaseapp.com",
  projectId: "buysell-88bdd",
  storageBucket: "buysell-88bdd.appspot.com",
  messagingSenderId: "321938668416",
  appId: "1:321938668416:web:a6985dde49ebe602881f65",
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage ;
