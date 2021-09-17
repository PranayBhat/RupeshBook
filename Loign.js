// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCSOmxqSiAJpX5dKBD182tRfZojFGx5ME",
    authDomain: "rupeshbook-56d75.firebaseapp.com",
    databaseURL: "https://rupeshbook-56d75-default-rtdb.firebaseio.com",
    projectId: "rupeshbook-56d75",
    storageBucket: "rupeshbook-56d75.appspot.com",
    messagingSenderId: "81048865054",
    appId: "1:81048865054:web:d60910183b65a1d65d610f",
    measurementId: "G-Y0RL07S2X8"
  };
  firebase.initializeApp(firebaseConfig);
  

function addUser()
{ user_name = document.getElementById("user_name").value;
Email = document.getElementById("Email").value;
console.log("hi");
 localStorage.setItem("user_name", user_name);
 localStorage.setItem("Email",Email);
window.location = "RupeshBook.html"; }
