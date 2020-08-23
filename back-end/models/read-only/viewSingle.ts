import { Collection } from "mongodb";

export const viewSingle = function (id: string, collection: () => Collection) {
  return new Promise(async (resolve, reject) => {
    if (typeof id !== "string") {
      return reject();
    }
    const res = await collection().findOne({});
    resolve(res);
  });
};
