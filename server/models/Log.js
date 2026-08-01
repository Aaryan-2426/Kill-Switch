const mongoose=require("mongoose");

const logSchema=new mongoose.Schema(
{
    action:String,
    description:String
},
{
    timestamps:true
});

module.exports=mongoose.model(
    "Log",
    logSchema
);