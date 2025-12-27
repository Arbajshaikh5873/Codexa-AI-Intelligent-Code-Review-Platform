import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./util/connectDb.js";
import router from "./routes/ai.route.js";

const app = express();

connectDb();

app.use(express.json());
app.use("/api/ai", router);

console.log("GEMINI KEY:", process.env.GOOGLE_GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("server is running ");
});

app.listen(8000, () => {
  console.log(`server is running on http://localhost:8000`);
});
