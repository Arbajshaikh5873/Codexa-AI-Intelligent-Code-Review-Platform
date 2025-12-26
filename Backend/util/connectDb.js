import mongoose from "mongoose";

export default function connectDb() {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("mongoDB Connected");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  
}
