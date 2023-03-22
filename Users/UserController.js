const express =require('express')
const { UserModel } = require('../mongoose/model/UserModel');
const userRouter = express.Router()
// userRouter.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const doc = await UserModel.findOne({ email: email });
//     if (doc != null && password == doc.password) {
//       res.send({
//         isSuccess: true,
//         user: { firstname: doc.firstname, email: doc.email },
//       });
//     } else {
//       res.send({ isSuccess: false, message: "User not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ message: "Server error" });
//   }
// });
  
  userRouter.post("/singup", async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    UserModel.findOne({ email: email }, async (errs, doc) => {
      if (doc != null) {
        res.send({
          isSuccess: false,
          message: "This email is already existing",
        });
      } else {
        const doc = new UserModel({
          firstname: firstname,
          lastname: lastname,
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