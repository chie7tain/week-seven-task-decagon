import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import os from "os";
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const spyRouter = require("./routes/spy");
const displayAllAuthors = require("./routes/displayAuthors");

import express from "express";
const app = express();
import { Request, Response, NextFunction } from "express";

app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1", indexRouter);
app.use("/spy", spyRouter);
app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/displayAuthors", displayAllAuthors);
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(
  (
    err: { message: any; status: any },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
);

module.exports = app;
