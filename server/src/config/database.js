import mongoose from "mongoose";
import logger from "./logger.js";

const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    logger.info("MongoDB Connected");
  } catch (error) {
    console.error("DATABASE ERROR:");
    console.error(error);
    console.error(error.message);

    logger.error(error);

    process.exit(1);
  }
};

export default connectDB;