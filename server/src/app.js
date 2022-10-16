import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(errorHandler);

export default app;
