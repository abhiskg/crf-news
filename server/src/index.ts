import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(5000, () => console.log("Server running"));