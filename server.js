require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const taskRoutes = require("./src/routes/taskRoutes");

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: serviceAccount.project_id,
    private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
    client_email: serviceAccount.client_email,
  }),
});

const app = express();
app.use(express.json());
app.use(cors());

const auth = admin.auth();

// Authentication Middleware
const authenticateToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Access Denied: No Token Provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Token Verification Error:", error.message);
    return res.status(403).json({ message: "Access Denied: Invalid Token" });
  }
};

// User Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await auth.createUser({ email, password });
    res.status(201).json({ message: "User created", userId: user.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Protected Task Routes
app.use("/tasks", authenticateToken, taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
