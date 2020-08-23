import { followsCollection } from "../db";
import User from "./User";
import { ObjectID } from "mongodb";
class Follow {
  followedBusinessName: string;
  followerId: ObjectID;
  errors: string[];
  constructor(followedBusinessName: string, followerId: ObjectID) {
    this.followedBusinessName = followedBusinessName;
    this.followerId = followerId;
    this.errors = [];
  }
}
export default Follow;
