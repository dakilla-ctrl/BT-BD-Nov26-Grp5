const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store matching our README Task schema
let tasks=[
{id:"1", title:"Learn Express",description:"study routes and middleware", status:"pending"},
{id:"2", title:"Build the API", description:"write the CRUD routes", Status:"pending"},
{id:"3", title:"Record the demo", description:"make a 3 to 5 minute video", status:"pending"},
];
// Health-check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Manager API is running' });
});

// --- ADD CRUDE ROUTES BELOW ---

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
