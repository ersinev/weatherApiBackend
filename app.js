const express = require("express")
const cors = require("cors");
const app =express()
app.use(cors())
const mongoose = require("mongoose");
const userRouter = require("./Users/UserController");


main().catch((err) => console.log(err));
app.use(express.json());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/weatherApi");
  console.log("Connected to MongoDB Atlas");
  
  
}

main().catch((err) => console.log(err));

app.listen(5000,()=>{
    console.log("server is running on 5000")
})


app.use("/signup", userRouter)