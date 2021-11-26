import fs from "fs";
import path from "path";
import { Request, Response } from "express";
const pathToData = path.join(__dirname, "../../database.json");
let authors = JSON.parse(
  fs.readFileSync(pathToData, {
    encoding: "utf-8",
  })
);
const Author = require("../models/authorModels");

// read data
// CONTROLLERS
const getAllData = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json({
      status: "success",
      data: { amt: authors.length, authors },
    });
  } catch (error) {
    console.log(error);
  }
};

const createData = async (req: Request, res: Response) => {
  // const id = authors[authors.length - 1].id + 1;
  // let newAuthor = { id, ...req.body };
  // authors.push(newAuthor);
  // fs.writeFile(pathToData, JSON.stringify(authors, null, 2), (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.status(201).json({
  //       status: "success",
  //       data: authors,
  //     });
  //   }
  // });
  let newAuthor = await Author.create(req.body);
  res.status(201).json({
    status: "success",
    data: newAuthor,
  });
};

const getData = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    let author = await Author.findById(id);
    res.status(200).json({
      status: "success",
      data: author,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    let id = +req.params.id;
    // let author = authors.find((author: { id: string }) => author.id == id);
    let author = await Author.findById(id);
    console.log("from update", author);

    if (!author) {
      res.status(404).json({
        status: "fail",
        message: "author not found",
      });
    } else {
      let {
        author: authorName,
        dateRegistered,
        age,
        address,
        books,
      } = req.body;

      // console.log(authorName, dateRegistered, age, address, books);
      const authorData = {
        authorName: authorName || author.authorName,
        dateRegistered: dateRegistered || author.dateRegistered,
        age: age || author.age,
        ddress: address || author.address,
        books: books || author.books,
      };
      const updatedAuthor = await Author.update(id, authorData);
      res.status(200).json({
        status: "success",
        data: updatedAuthor,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req: Request, res: Response) => {
  try {
    let id = +req.params.id;

    let author = await authors.find((author: any) => author.id === id);

    if (!author) {
      res.status(404).json({
        status: "fail",
        message: "author not found",
      });
    } else {
      // authors = authors.filter((author: { id: number }) => author.id !== id);
      let r = await Author.remove(id);
      console.log(r);
      res.status(200).json({
        status: `successfully deleted`,
        message: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export { getAllData, createData, getData, updateData, deleteData };
