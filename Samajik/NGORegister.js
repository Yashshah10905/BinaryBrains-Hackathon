// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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
        const db = getDatabase(app);

        document.getElementById("submit").addEventListener('click', function (e) {
            e.preventDefault();

            set(ref(db, 'user/' + document.getElementById("username").value), {
                username: document.getElementById("username").value,
                ngofounder: document.getElementById("ngofounder").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                address: document.getElementById("address").value,
                uniqueid: document.getElementById("Unique-id").value,
                city: document.getElementById("inputCity").value,
                state: document.getElementById("inputState").value,
            })
            .then(() => {
                alert("Data stored successfully!");
                window.location.href = "AfterLogin.html";
            })
            .catch((error) => {
                console.error("Error writing data: ", error);
            });
        });
    