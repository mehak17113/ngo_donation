// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9P2BhjL0dCOQ0ElDjiEjs5mMn5DHXars",
    authDomain: "ngo1-f9a6e.firebaseapp.com",
    projectId: "ngo1-f9a6e",
    storageBucket: "ngo1-f9a6e.appspot.com",
    messagingSenderId: "309726258338",
    appId: "1:309726258338:web:57ae10fa3641ad709763fb",
    measurementId: "G-K6GFYNZPF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);





const submit = document.getElementById('submitl');
submit.addEventListener("click", function (event) {

    event.preventDefault()


    const password = document.getElementById('passl').value; // Repeated password input value for sign-up
    const email = document.getElementById('emaill').value; // Email address input value for sign-up

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signin-Complete")
            window.location.href='indexlogout.html';
            localStorage.setItem('signin', true);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})


