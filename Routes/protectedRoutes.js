// protectedRoutes.js
const express = require('express');
const protectedrouter = express.Router();
const validators = require('../validation/validator'); // Adjust the path as needed

protectedrouter.post(
  "/login",
  validators.loginvalidation,
  (req, res) => {
    // Your login route logic here
    res.send('Login route');
  }
);

module.exports = protectedrouter;
