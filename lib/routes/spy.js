"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const spies = [];
// , { title: "spy view", spies }
const displayAllSpies = (req, res) => {
    res.render("spy", { title: "spy view", spies });
};
const createSpy = (req, res) => {
    const spy = req.body;
    spies.push(spy);
    res.status(201).json({
        status: "success",
        data: { spy },
    });
};
router.route("/").get(displayAllSpies).post(createSpy);
module.exports = router;
// app.use("/", indexRouter);
// let users: object[] = [];
// console.log(users);
// let user = users[0];
// app.route("/").get((req: Request, res: Response) => {
//   res.render("index", { title: "Home", users: users });
// });
// app
//   .route("/user")
//   .get((req: Request, res: Response, next: NextFunction) => {
//     console.log("from get", users);
//     res.status(200).json(users);
//   })
//   .post((req: Request, res: Response, next: NextFunction) => {
//     let user = req.body;
//     users.push(user);
//     console.log(users);
//     res.status(201).json({
//       status: "success",
//       data: user,
//     });
//   });
