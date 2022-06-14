import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIMMqHOlDElxzgw9zs1CX2bBcyckUjVhs",
  authDomain: "crypto-raffle-90df6.firebaseapp.com",
  projectId: "crypto-raffle-90df6",
  storageBucket: "crypto-raffle-90df6.appspot.com",
  messagingSenderId: "296785011516",
  appId: "1:296785011516:web:fc6726e1bf1cccf2987439",
  measurementId: "G-NBEGMLSZR9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
