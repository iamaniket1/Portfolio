import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDvLAenLZze0URT-a7ZI_rVUfUEhCfRg1c",
  authDomain: "aniket-portfolio1.firebaseapp.com",
  projectId: "aniket-portfolio1",
  storageBucket: "aniket-portfolio1.appspot.com",
  messagingSenderId: "7807542812",
  appId: "1:7807542812:web:f09a333cf4369158f021d9",
  measurementId: "G-PMP9N0EL48",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
