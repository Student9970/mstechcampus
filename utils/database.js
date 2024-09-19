import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "mstechcampus",
    });
  } catch (error) {
    console.log("Error connecting to Database");
  }
};
