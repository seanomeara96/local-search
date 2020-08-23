import { Collection } from "mongodb";

export const viewAll = function (
  businessId: string,
  collection: () => Collection
) {
  return new Promise(async (resolve, reject) => {
    if (typeof businessId !== "string") {
      return reject();
    }
    const res = await collection(); // find many
    resolve(res);
  });
};
