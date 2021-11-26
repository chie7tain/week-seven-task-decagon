"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
function writeDataToFile(filepath, content) {
    try {
        console.log("we are writing", content);
        (0, fs_1.writeFileSync)(filepath, JSON.stringify(content, null, 2));
    }
    catch (error) {
        console.log(error);
    }
}
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                resolve(body);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
module.exports = {
    writeDataToFile,
    getPostData,
};
