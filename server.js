// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const db = require('./config/connection'); // Ensure this is properly configured to connect to MongoDB
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen for DB connection before starting the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
