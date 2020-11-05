import { Collection } from "mongodb";
// can read single or many
export const read = function (
  single: boolean,
  businessId: string,
  collection: () => Collection
) {
  return new Promise(async (resolve, reject) => {
    if (typeof businessId !== "string")
      return reject("businessId is not a string");
    try {
      const res = single
        ? await collection().findOne({}) // find a single item
        : await collection().find({}); // find many items
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
};
