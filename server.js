// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const db = require('./config/connection'); // Ensure this is properly configured to connect to MongoDB
const routes = require('./routes'); // Import your routes
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route to handle GET requests to the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

// Use your routes (let '/api' be handled by routes/index.js)
app.use(routes); // Removed '/api' prefix here

// Listen for DB connection before starting the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
