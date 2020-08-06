import * as rawAPIs from "./apis-center";

export const APIs = Object.keys(rawAPIs).reduce(
  (obj, name) => ({ ...obj, [name]: new rawAPIs[name]() }),
  {}
);
