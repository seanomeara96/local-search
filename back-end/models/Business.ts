import { businessCollection } from "../db";
import bcrypt from "bcryptjs";
interface businessData {
  name: string;
  locations: string[];
  email: string;
  number: string;
  openingHours: number[];
}
class Business {
  data: any;
  errors: string[];
  constructor(data: businessData) {
    this.data = data;
    this.errors = [];
  }
  registerBusiness!: () => Promise<void>;
  deleteBusiness!: () => Promise<void>;
  businessLogin!: () => Promise<any>;
}

// cleanup function
// validate function
Business.prototype.businessLogin = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      const attemptedUser = await businessCollection().findOne({
        /**username */
      });
      if (
        attemptedUser &&
        bcrypt.compareSync(this.data.password, attemptedUser.password)
      ) {
        this.data = attemptedUser;
        resolve(this.data);
      }
    } else {
      reject();
    }
  });
};

Business.prototype.registerBusiness = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await businessCollection().insertOne({});
      resolve();
    } else {
      reject();
    }
  });
};
Business.prototype.deleteBusiness = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await businessCollection().deleteOne({});
      resolve();
    } else {
      reject();
    }
  });
};
export const doesEmailExist = function () {
  return new Promise(async (resolve, reject) => {
    const res = await businessCollection().findOne({});
    // findone resolves with?
    if (/*sucess*/ res) {
      resolve();
    } else {
      reject();
    }
  });
};
export default Business;
