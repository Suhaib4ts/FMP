  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCShO9--GkpcdvfUmaoENZSd6O-jckm6zU",
    authDomain: "portfolio-c9d54.firebaseapp.com",
    projectId: "portfolio-c9d54",
    storageBucket: "portfolio-c9d54.appspot.com",
    messagingSenderId: "607349588680",
    appId: "1:607349588680:web:ed6d5ae77acc135cb3dbfd",
    measurementId: "G-KRKQVRDEJS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

