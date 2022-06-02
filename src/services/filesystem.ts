import { readFileSync, writeFileSync } from "fs";
import { PreviousPost } from "../interfaces/content";

export const setPrevious = (data: PreviousPost): void => {
  writeFileSync(`./data/data.json`, JSON.stringify(data), {
    encoding: "utf8",
  });
  return;
};

export const getPrevious = (): PreviousPost => {
  return JSON.parse(readFileSync(`./data/data.json`).toString());
};
