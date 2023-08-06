const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const routes = require('./routes');
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});