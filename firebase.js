 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth , RecaptchaVerifier , signInWithPhoneNumber,signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBAEqQs0onj7u00WaaGUgUiOLjZ7j_RA90",
   authDomain: "phone-verefication-2e9fc.firebaseapp.com",
   projectId: "phone-verefication-2e9fc",
   storageBucket: "phone-verefication-2e9fc.appspot.com",
   messagingSenderId: "111744208629",
   appId: "1:111744208629:web:1e3ad4f5b1cc6c38fc7fbc",
   measurementId: "G-YX8TWF2F7C"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export{
    app,
    auth,
    RecaptchaVerifier,
    signInWithPhoneNumber ,
    signOut,
    onAuthStateChanged
 }