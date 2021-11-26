export {};
import { writeFile, writeFileSync, appendFileSync } from "fs";

import { Request, Response } from "express";
const path = require("path");

function writeDataToFile(filepath: string, content: string) {
  try {
    console.log("we are writing", content);
    writeFileSync(filepath, JSON.stringify(content, null, 2));
  } catch (error) {
    console.log(error);
  }
}
function getPostData(req: Request) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = {
  writeDataToFile,
  getPostData,
};
