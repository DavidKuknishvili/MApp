import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoV7-h6beCFECANF037RLXXM80IfkVkNE",
  authDomain: "movie-8b284.firebaseapp.com",
  projectId: "movie-8b284",
  storageBucket: "movie-8b284.appspot.com",
  messagingSenderId: "469670684746",
  appId: "1:469670684746:web:44e910e9a91ad5403b1eb3"
};


const app = initializeApp(firebaseConfig);

export const FirebaseMAuth = getAuth(app);