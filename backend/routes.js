const express = require("express");
const router = express.Router();
const User = require("./userModel");


router.post("/register", async (req, res) => {
  const { email, password, optionValue, username } = req.body;
  console.log(req.body);
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("email is taken");

    const user = await new User({
      email,
      password,
      username,
      optionValue,
    });
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    console.log("err");
    return res.status(400).send("Error, try again");
  }
});
module.exports = router;
