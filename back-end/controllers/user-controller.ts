const User = require("../models/User.js");
const Follow = require("../models/Follow.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.register = async function (req, res) {
  console.log("Registering user.", req.body);
  let user = new User(req.body);
  try {
    let newUser = await user.register();

    console.log("Successful user registration:", newUser);
    res.status(201).json({ message: `Welcome, ${newUser}` });
  } catch (errors) {
    console.log(errors);

    if (Array.isArray(errors)) {
      res.json({ errors });
    } else {
      res.sendStatus(500);
    }
  }
};

exports.login = async function (req, res) {
  console.log("logging in user", req.body);
  let user = new User(req.body);
  try {
    let authenticUser = await user.login();
    const accessToken = jwt.sign(
      authenticUser,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
exports.logout = function (req, res) {
  console.log("logging out user", req.body);
  res.json({ message: "Successfully logged out." });
};
exports.doesUsernameExist = async function (req, res) {
  try {
    let usedUsername = await User.findByUserName(req.body.username);
    if (usedUsername) {
      res.json({ message: "Sorry that username is taken." });
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    res.json({ error });
  }
};
exports.doesEmailExist = async function (req, res) {
  try {
    let usedEmail = await User.doesEmailExist(req.body.email);
    if (usedEmail) {
      res.json({
        message:
          "There is already an account associated with this email address.",
      });
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    res.json({ error });
  }
};
exports.mustBeLoggedIn = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // Unauthorized
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden due to invalid token
    req.user = user;
    next();
  });
};
