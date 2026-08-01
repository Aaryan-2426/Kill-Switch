const Log=require("../models/Log");
exports.startAgent=async(req,res)=>{

await Log.create({
action:"AGENT_START",
description:"AI Agent Started"
});

res.json({
success:true,
message:"AI Agent Started"
});

};

exports.stopAgent=async(req,res)=>{

await Log.create({
action:"AGENT_STOP",
description:"AI Agent Stopped"
});

res.json({
success:true,
message:"AI Agent Stopped"
});

};