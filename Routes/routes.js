const protectedRoutes = require("./protectedRoutes");
const publicRoutes = require('./publicRoutes');
const express = require('express');
const router = express.Router(); // Create an instance of express.Router

router.use(
    "/protected/users",
    protectedRoutes
);

router.use(
    "/public/users",
    publicRoutes
);

module.exports = router; // Export the router instead of the app