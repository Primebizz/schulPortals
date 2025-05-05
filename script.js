'use strict'

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
// // import { getAnalytics } from "firebase/analytics";
// // import firebase from "firebase/compat/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBkyDlqZ6iI4Ctyi7uxc9ieucCKZNsv6JU",
//   authDomain: "schulportals-28912.firebaseapp.com",
//   projectId: "schulportals-28912",
//   databaseUrl: "https://schulportals-28912-default-rtdb.firebaseio.com/",
//   storageBucket: "schulportals-28912.firebasestorage.app",
//   messagingSenderId: "928818611437",
//   appId: "1:928818611437:web:3e6d4720421c906aaa38e4",
//   measurementId: "G-JS5BLSYJ1E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);


// // Initialize Firebase Analytics
//   document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const number = document.getElementById("number").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;

//     const submissionRef = ref(db, "formSubmissions")
//     const newEntry = push(submissionRef)
//     set(newEntry, {
//       name,
//       email,
//       number,
//       subject,
//       message
//     }).then(() => {
//       alert("Message sent successfully!");
//     }).catch((error) => {
//       console.error("Error:", error);
//     });
//   });



  function sendMail(){
    debugger
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_01vofv6", "template_758s11l", params).then(function(res){
        // document.getElementById("contactForm").reset();
        console.log(res);
        alert("Message sent successfully!");
    })
  }










// const header = document.querySelector('div#header');
// const navBar = document.querySelector('div#navBar');
// const body = document.body;

// let lastKnownScrollPosition = 0;


// body.addEventListener("scroll", (event) => {
//     debugger
//     lastKnownScrollPosition = window.scrollX

//     if(lastKnownScrollPosition > '55'){
//         navBar.style.display = 'none !important'
//     }else{

//     }
// })

// console.log(dynamicNav());

// Import the functions you need from the SDKs you need