const mongoose=require("mongoose");

const alertSchema=new mongoose.Schema(
{
    level:String,
    message:String
},
{
    timestamps:true
});

module.exports=mongoose.model(
    "Alert",
    alertSchema
);