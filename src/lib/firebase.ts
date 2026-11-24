import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBqjUbGEAeNXRVaRp85DJk2MRPqxujWY",
  authDomain: "spen4sa-6abf1.firebaseapp.com",
  databaseURL: "https://spen4sa-6abf1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spen4sa-6abf1",
  storageBucket: "spen4sa-6abf1.firebasestorage.app",
  messagingSenderId: "386154992191",
  appId: "1:386154992191:web:30268f85ca039b8038de8a",
  measurementId: "G-YG6H0SR69H"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
