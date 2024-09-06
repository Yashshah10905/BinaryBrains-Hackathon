import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMfKKwgBDu0sv51dsZSuCoXX_ZnTi9zto",
  authDomain: "samajik-4b0d4.firebaseapp.com",
  projectId: "samajik-4b0d4",
  storageBucket: "samajik-4b0d4.appspot.com",
  messagingSenderId: "955210616673",
  appId: "1:955210616673:web:82f245f5f6402f1c7eff20",
  measurementId: "G-LG5DD9HG0S",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const  provider = new GoogleAuthProvider();

const googleLogin= document.getElementById("google-btn")
googleLogin.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href="AfterLogin.html";
   
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message; 
   
  });
})
const submit = document.getElementById("submit");
submit.addEventListener("click", function() {
  
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
 
      const user = userCredential.user;
      alert("Creating account");
      window.location.href = "Homepage.html"
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
