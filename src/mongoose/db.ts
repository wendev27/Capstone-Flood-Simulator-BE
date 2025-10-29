// src/db.ts
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/smartflood";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default mongoose;
