const express =require('express')
userRouter.post("/", async (req, res) => {
    const { email, password, } = req.body;
    UserModel.findOne({ email: email }, (errs, doc) => {
      if (doc != null && password == doc.password) {
        res.send({
          isSuccess: true,
          user: { username: doc.name, email: doc.email },
        });
      } else {
        res.send({ isSuccess: false, message: "User not found" });
      }
    });
  });
  
  userRouter.post("/singin", async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    UserModel.findOne({ email: email }, async (errs, doc) => {
      if (doc != null) {
        res.send({
          isSuccess: false,
          message: "This email is already existing",
        });
      } else {
        const doc = new UserModel({
          name: name,
          password: password,
          email: email,
        });
  
        await doc.save();
        res.send({ isSuccess: true, message: "registration is successful" });
        console.log("user saved");
      }
    });
  });
  
  module.exports = userRouter