const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store matching our README Task schema
let tasks=[
{id: "1", title:"Learn Express",description:"study routes and middleware", status:"completed"},
{id: "2", title:"Build the API", description:"write the CRUD routes", status:"pending"},
{id: "3", title:"Record the demo", description:"make a 3 to 5 minute video", status:"pending"},
];

let nextId = 4;
// Health-check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Manager API is running' });
});

// Add task 
app.post('/tasks', (req, res) => {
  const { title, description, status } = req.body;
  

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      message: 'Title is required and must be a non-empty string',
    });
  }
  
  if (status && !["pending", "completed"].includes(status)){
    return res.status(400).json({
      message: "Status must be pending or completed!"
    });
  }
  const newTask = { id: String(nextId++),
      title: title.trim(),
      description: description || "",
      status: status || "pending" };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

//Get All available task
app.get('/tasks/completed', (req, res) =>{
  const completedTasks = tasks.filter(task => task.status === "completed");
  res.status(200).json(completedTasks);

});

// Get task by ID
app.get('/tasks/:id', (req, res) => {
  const taskId = (req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
});

// Get all Available tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

<<<<<<< HEAD
=======
//Get All available tasks

app.get('/completed', (req, res) =>{
  const completedTasks = tasks.filter(task => task.status === "completed");
  res.status(200).json(completedTasks);

});

//Update  existing task by ID

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(t => t.id === taskId);
  const { title, description, status } = req.body;
  
  if(!task){
    return res.status(404).json({message: "Not found"})
  }

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      message: 'Title is required and must be a non-empty string',
    });
  }
  
  if (status && !["pending", "completed"].includes(status)){
    return res.status(400).json({
      message: "Status must be pending or completed!"
    });
  }

  task.title = title.trim();
  task.description = description ?? task.description;
  task.status = status ?? task.status;

  res.status(200).json({message: "Task updated successfully", task});
})

>>>>>>> 70b541acd6767fd819cd5a1013a66667d21bf7fe
// --- ADD CRUDE ROUTES BELOW ---

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});