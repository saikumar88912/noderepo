const express=require("express")
const router = express.Router();
const schema=require('./schema')

const loginschema=async(req,res)=>{
    console.log("09876");
}

module.exports = {
    router,
    loginschema,
  };