
const express=require("express")
const router = express.Router();
const schema=require('./schema')
// Define your public routes and middleware here

const loginvalidation = async (req, res, next) => {
    console.log("poiuytre");
    // Your validation logic here
    schema.loginschema(req,res);
    
    next();
  };
  
  module.exports = {
    router,
    loginvalidation,
  };
   