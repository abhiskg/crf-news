import express, { Request, Response } from "express";
import cors from "cors";
const categories = require("../data/categories.json");

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/news-categories", (req: Request, res: Response) => {
  res.send(categories);
});

app.listen(5000, () => console.log("Server running"));
