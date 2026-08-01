const express=require("express");

const router=express.Router();

const{
startAgent,
stopAgent
}=require("../controllers/agentController");

router.post("/start",startAgent);

router.post("/stop",stopAgent);

module.exports=router;