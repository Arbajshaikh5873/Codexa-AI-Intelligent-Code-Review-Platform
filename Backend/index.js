import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./util/connectDb.js";

const app = express();

connectDb();

app.get((req, res) => {
  res.send("server is running ");
});

app.listen(8000, () => {
  console.log(`server is running on http://localhost:8000`);
});
