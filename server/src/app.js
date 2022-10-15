import express from "express";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {});

export default app;
