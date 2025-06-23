// server.js (Your Backend Application)
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 5000; // This must match the port your frontend fetches from

// Middleware
app.use(cors()); // Enable CORS for your frontend
app.use(express.json()); // To parse JSON request bodies

// Dummy User Database (For demonstration. In real app, this is a DB)
const users = [
  { id: 'user123', username: 'testuser', passwordHash: bcrypt.hashSync('password123', 8), email: 'test@example.com' },
  { id: 'alice1', username: 'alice', passwordHash: bcrypt.hashSync('alicenode', 8), email: 'alice@example.com' },
  { id: 'bob2', username: 'bob', passwordHash: bcrypt.hashSync('bobpass', 8), email: 'bob@example.com' }, // Added another user
];

// Secret key for signing JWTs (KEEP THIS SECURE IN A REAL APP, e.g., environment variable)
const JWT_SECRET = 'your_jwt_secret_key_very_secure_and_long_and_random_string_here_12345'; // Use a strong, unique secret

// Login Route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const payload = {
    userId: user.id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Example of a protected route (optional, for testing)
app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Expects "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: `Welcome, ${decoded.username}! This is protected data.` });
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
});


app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});