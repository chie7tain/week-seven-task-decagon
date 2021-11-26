"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
// router
//   .route("/")
//   .get(function (req: Request, res: Response, next: NextFunction) {
//     res.send({ message: "Hello World!" });
//   });
module.exports = router;
