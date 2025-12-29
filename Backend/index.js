import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDb from "./util/connectDb.js";
import router from "./routes/ai.route.js";

const app = express();

app.use(cors());

connectDb();

app.use(express.json());

app.use("/api/ai", router);

app.get("/", (req, res) => {
  res.send("server is running ");
});

app.listen(8000, () => {
  console.log(`server is running on http://localhost:8000`);
});
