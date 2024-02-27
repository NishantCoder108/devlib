import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_APPID,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_MEASUREMENTID,
    VITE_FIREBASE_MESSAGING_SENDERID,
    VITE_FIREBASE_PROJECTID,
    VITE_FIREBASE_STORAGE_BUCKET,
} from "./constants";

const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    projectId: VITE_FIREBASE_PROJECTID,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDERID,
    appId: VITE_FIREBASE_APPID,
    measurementId: VITE_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
