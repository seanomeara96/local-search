let usersCollection = require("../db").db("Famulis").collection("Users");
const bcrypt = require("bcryptjs");
const validator = require("validator");
interface UserObject {}
class User {
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
  cleanUp!: () => void;
  validate!: () => void;
  login!: () => Promise<UserObject>;
  register!: () => void;
}
User.prototype.cleanUp = function () {
  if (typeof this.data.username != "string") {
    this.data.username = "";
  }
  if (typeof this.data.email != "string") {
    this.data.email = "";
  }
  if (typeof this.data.password != "string") {
    this.data.password = "";
  }
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  };
};

User.prototype.validate = function () {
  return new Promise(async (resolve, reject) => {
    if (this.data.username == "") {
      this.errors.push("Please provide a username.");
    }
    if (
      this.data.username != "" &&
      !validator.isAlphanumeric(this.data.username)
    ) {
      this.errors.push("Usernames can only contain letters and numbers.");
    }
    if (!validator.isEmail(this.data.email)) {
      this.errors.push("Please provide a valid email address.");
    }
    if (this.data.password == "") {
      this.errors.push("Please provide a password.");
    }
    if (this.data.password.length > 0 && this.data.password.length < 8) {
      this.errors.push("Password must be at least 8 characters.");
    }
    if (this.data.password.length > 50) {
      this.errors.push("Password cannot exceed 50 chracters.");
    }
    if (this.data.username.length > 0 && this.data.username.length < 3) {
      this.errors.push("Username must be at least 3 characters.");
    }
    if (this.data.username.length > 30) {
      this.errors.push("Username cannot exceed 30 characters.");
    }
    if (
      this.data.username.length > 2 &&
      this.data.username.length < 31 &&
      validator.isAlphanumeric(this.data.username)
    ) {
      let usernameExists = await usersCollection.findOne({
        username: this.data.username,
      });
      if (usernameExists) {
        this.errors.push("Seems this username is already taken.");
      }
    }
    if (validator.isEmail(this.data.email)) {
      let emailExists = await usersCollection.findOne({
        email: this.data.email,
      });
      if (emailExists) {
        this.errors.push("This email is already registered to an account.");
      }
    }
    resolve();
  });
};

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp();
    // take username or email
    let identifier;
    if (this.data.username) {
      identifier = { username: this.data.username };
    } else if (this.data.email) {
      identifier = { email: this.data.email };
    } else {
      reject("something went wrong");
    }
    usersCollection
      .findOne(identifier)
      .then((attemptedUser: any) => {
        if (
          attemptedUser &&
          bcrypt.compareSync(this.data.password, attemptedUser.password)
        ) {
          // Success
          this.data = attemptedUser;
          resolve(this.data);
        } else {
          // Failure
          reject("Invalid username/password.");
        }
      })
      .catch(() => {
        reject("please try again later");
      });
  });
};

User.prototype.register = function () {
  return new Promise(async (resolve, reject) => {
    this.cleanUp();
    await this.validate();
    if (!this.errors.length) {
      let salt = bcrypt.genSaltSync(10);
      this.data.password = bcrypt.hashSync(this.data.password, salt);
      await usersCollection.insertOne(this.data);
      resolve();
    } else {
      reject(this.errors);
    }
  });
};

export const findByUserName = function (username: string) {
  return new Promise(function (resolve, reject) {
    if (typeof username != "string") {
      reject("Username must be of type: string.");
      return;
    }
    usersCollection
      .findOne({ username: username })
      .then(function (userDoc: any) {
        if (userDoc) {
          userDoc = new User(userDoc);
          userDoc = {
            _id: userDoc.data._id,
            username: userDoc.data.username,
          };
          resolve(userDoc);
        } else {
          resolve(false);
        }
      })
      .catch(function () {
        reject("There was an error finding a user by username.");
      });
  });
};

export const doesUserEmailExist = function (email: string) {
  return new Promise(async function (resolve, reject) {
    if (typeof email != "string") resolve(false);
    let user = await usersCollection.findOne({ email: email });
    if (user) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

export default User;
