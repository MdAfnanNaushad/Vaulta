
import mongoose from "mongoose";
import "./config/env.js";
import connectDB from "./config/database.js";

import User from "./models/User.js";

const seed = async () => {
  try {
    await connectDB();

    await User.deleteMany();

    const admin = await User.create({
      fullName: "System Admin",

      email: "admin@nexachain.com",

      mobile: "933099402",

      password: "Admin123@",

      referralCode: "ADMIN001",

      role: "ADMIN",
    });

    console.log("Admin Created");

    process.exit(0);
  } catch (error) {
    console.error("SEED ERROR:");
    console.error(error);
    console.error(error.message);
    console.error(error.stack);

    process.exit(1);
  }
};

seed();
