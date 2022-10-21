import express, { Request, Response } from "express";
import cors from "cors";
import { newsDataType } from "./types/newsDataType";
const categories = require("../data/categories.json");
const news = require("../data/news.json") as newsDataType[];

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/news-categories", (req: Request, res: Response) => {
  res.send(categories);
});

app.get("/news-category/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const filteredNews = news.filter((n) => n.category_id === id);
    res.send(filteredNews);
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(5000, () => console.log("Server running"));
