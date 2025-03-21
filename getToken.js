const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyA7zqzBQAvW43u5QP5YrH6SmhQDhSDMxsA",
  authDomain: "myauthproject-af9b1.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

const loginUser = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, "user@example.com", "password123");
    const token = await userCredential.user.getIdToken();
    console.log("Firebase Token:", token);
  } catch (error) {
    console.error("Login Failed:", error.message);
  }
};

loginUser();
