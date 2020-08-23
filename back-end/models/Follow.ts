import { followsCollection } from "../db";
import User from "./User";
import { ObjectID } from "mongodb";
class Follow {
  relationship: {
    followee: ObjectID;
    follower: ObjectID;
  };
  errors: string[];
  constructor(followedBusinessId: ObjectID, followerId: ObjectID) {
    this.relationship = {
      followee: followedBusinessId,
      follower: followerId,
    };
    this.errors = [];
  }
  addFollow!: () => Promise<void>;
  deleteFollow!: () => Promise<void>;
}
// add in some securtiy steps
Follow.prototype.addFollow = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await followsCollection().insertOne(this.relationship);
      resolve();
    } else {
      reject();
    }
  });
};
Follow.prototype.deleteFollow = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await followsCollection().deleteOne(this.relationship);
      resolve();
    } else {
      reject();
    }
  });
};
export default Follow;
