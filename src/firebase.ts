// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";//
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6PWJ8rhXmeNCDO8m0IYk3fmJCrsR0TZg",
  authDomain: "inniger-web.firebaseapp.com",
  projectId: "inniger-web",
  storageBucket: "inniger-web.firebasestorage.app",
  messagingSenderId: "151037459973",
  appId: "1:151037459973:web:83de9c7a0741b1ce50a66c",
  measurementId: "G-4J09DRHE7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Serviço de autenticação
export const auth = getAuth(app);

// Exporta o app caso seja necessário usar em outros lugares
export default app;