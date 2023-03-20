const express = require("express")
const cors = require("cors");
const app =express()
app.use(cors())
const mongoose = require("mongoose")


main().catch((err) => console.log(err));
app.use(express.json());

async function main() {
    await mongoose.connect("mongodb://localhost:27017/weatherApiUsers");
  }
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(5000,()=>{
    console.log("server is running on 5000")
})