var express = require("express");
var router = express.Router();
import { Response, Request, NextFunction } from "express";
/* GET home page. */
router.get(
  "/",
  function (
    req: Request,
    res: { render: (arg0: string, arg1: { title: string }) => void },
    next: NextFunction
  ) {
    res.render("index", { title: "Express" });
  }
);
// router
//   .route("/")
//   .get(function (req: Request, res: Response, next: NextFunction) {
//     res.send({ message: "Hello World!" });
//   });
module.exports = router;
