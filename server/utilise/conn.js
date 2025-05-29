const mongoose = require('mongoose')

const conn = async(req,res)=>{
 try {
   await mongoose.connect("mongodb+srv://xtylishab000:o8e9aES5cpYsooTq@cluster0.orvxkjy.mongodb.net/").then(()=>{
    console.log("Database connected successfully !!");
  })
 } catch (error) {
  res.status(400).json({message:"Not connected"})
 }
};
conn();