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
  registerBusiness!: () => Promise<any>;
  deleteBusiness!: () => Promise<any>;
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
      try {
        const newBusiness = await businessCollection().insertOne({});
        resolve(newBusiness);
      } catch (err) {
        reject("Something went wrong while registering the business.");
      }
    } else {
      reject(this.errors);
    }
  });
};
Business.prototype.deleteBusiness = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      try {
        await businessCollection().deleteOne({});
        resolve("Successfully deleted the business");
      } catch (err) {
        reject("Something went wrong deleting this business");
      }
    } else {
      reject(this.errors);
    }
  });
};
export const doesEmailExist = function () {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await businessCollection().findOne({
        /*email to search*/
      });
      // findone resolves with?
      if (/*sucess*/ res) {
        resolve(true);
      } else {
        reject(false);
      }
    } catch (err) {
      reject("Something went wrong finding email");
    }
  });
};
export default Business;
