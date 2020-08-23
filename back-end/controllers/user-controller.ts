import User, { findByUserName, doesUserEmailExist } from "../models/User";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const registerUser = async function (req: Request, res: Response) {
  console.log("Registering user.", req.body);
  let user = new User(req.body);
  try {
    let newUser = await user.register();
    console.log("Successful user registration:", newUser);
    res.sendStatus(201);
  } catch (errors) {
    console.log(errors);
    if (Array.isArray(errors)) {
      res.json({ errors });
    } else {
      res.sendStatus(500);
    }
  }
};

export const userLogin = async function (req: Request, res: Response) {
  console.log("logging in user", req.body);
  let user = new User(req.body);
  try {
    let authenticUser = await user.login();
    const accessToken = jwt.sign(
      authenticUser,
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "1m" }
    );
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
export const userLogout = function (req: Request, res: Response) {
  console.log("logging out user", req.body);
  res.json({ message: "Successfully logged out." });
};
export const doesUsernameExist = async function (req: Request, res: Response) {
  try {
    let usedUsername = await findByUserName(req.body.username);
    if (usedUsername) {
      res.json({ message: "Sorry that username is taken." });
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    res.json({ error });
  }
};
export const doesEmailExist = async function (req: Request, res: Response) {
  try {
    let usedEmail = await doesUserEmailExist(req.body.email);
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
export const mustBeLoggedIn = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // Unauthorized
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden due to invalid token
    // req.user = user;
    next();
  });
};
