const express = require("express")
const cors = require("cors");
const app =express()
app.use(cors())
const mongoose = require("mongoose");
const userRouter = require("./Users/UserController");



app.use(express.json());

const uri = 'mongodb://localhost/weatherapi'; // replace with your MongoDB URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.listen(5000,()=>{
    console.log("server is running on 5000")
})


app.use("/signup", userRouter)