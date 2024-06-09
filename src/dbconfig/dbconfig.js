import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log("something want to wrong mongoDB is not connect" + error);
  }
}
