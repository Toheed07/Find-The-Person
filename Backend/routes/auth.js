const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, logInValidation } = require("../validation");

//Register
router.post("/register", async (req, res) => {
  // validating user
  try {
    await registerValidation(req.body);
  } catch (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Checking if users already exist in database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Creating new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    // res.send({ user: user._id });
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }

});

//LogIn

router.post("/login", async (req, res) => {
  // validating user
  try {
    await logInValidation(req.body);
  } catch (error) {
    return res.status(400).send(error.details[0].message);
  }
  //Checking if email already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is wrong");

  //checking password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  //create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

router.get("/getUsers", async (req, res) => {
  const user = await User.find()
  
  res.send(user);
});
module.exports = router;
