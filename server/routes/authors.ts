export {};
let router = require("express").Router();


import {getAllData,getData,createData,updateData,deleteData} from "../controllers/controllers"
// /authors
router.route("/").get(getAllData).post(createData);

// /authors:
router.route("/:id").get(getData).put(updateData).delete(deleteData);

module.exports = router;
