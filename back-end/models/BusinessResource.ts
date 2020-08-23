import { Collection } from "mongodb";

abstract class BusinessResource {
  abstract collection: () => Collection;
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
  createSingle!: (callback: () => Collection) => Promise<void>;
  updateSingle!: (callback: () => Collection) => Promise<void>;
  deleteSingle!: (callback: () => Collection) => Promise<void>;
}
BusinessResource.prototype.createSingle = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await this.collection().insertOne({});
      resolve();
    } else {
      reject();
    }
  });
};
BusinessResource.prototype.updateSingle = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await this.collection().findOneAndUpdate({}, {});
      resolve();
    } else {
      reject();
    }
  });
};
BusinessResource.prototype.deleteSingle = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await this.collection().findOneAndDelete({});
      resolve();
    } else {
      reject();
    }
  });
};
export default BusinessResource;
