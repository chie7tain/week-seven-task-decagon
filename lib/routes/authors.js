"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let router = require("express").Router();
const controllers_1 = require("../controllers/controllers");
// /authors
router.route("/").get(controllers_1.getAllData).post(controllers_1.createData);
// /authors:
router.route("/:id").get(controllers_1.getData).put(controllers_1.updateData).delete(controllers_1.deleteData);
module.exports = router;
