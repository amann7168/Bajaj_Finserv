const express=require("express");
const router=express.Router();
const { handlePost } = require("../controllers/controllers");
router.post('/', handlePost);
 
module.exports=router


