// main application file (e.g., app.js or index.js)
const express = require('express');
const routes = require('./Routes/routes'); // Import the router from routes.js
const app = express();

const PORT = process.env.PORT || 8080;

app.use(routes); // Use the router as middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
