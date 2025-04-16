// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyCdcpqay16BVksKqtXRsXl8O6sfJK6WHnk",
        authDomain: "mockwizard-c9ec9.firebaseapp.com",
        projectId: "mockwizard-c9ec9",
        storageBucket: "mockwizard-c9ec9.firebasestorage.app",
        messagingSenderId: "220319910620",
        appId: "1:220319910620:web:810fd90431013897370219",
        measurementId: "G-Q409DNDKQW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
