import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
    FIREBASE_API_KEY,
    FIREBASE_APPID,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_MEASUREMENTID,
    FIREBASE_MESSAGING_SENDERID,
    FIREBASE_PROJECTID,
    FIREBASE_STORAGE_BUCKET,
} from "../constants";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECTID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDERID,
    appId: FIREBASE_APPID,
    measurementId: FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
