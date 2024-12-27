import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
