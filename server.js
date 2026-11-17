const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store matching our README Task schema
let tasks = [];

// Health-check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Manager API is running' });
});

// --- ADD CRUDE ROUTES BELOW ---

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});