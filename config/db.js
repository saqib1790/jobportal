import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.Mongo_URL);
    console.log(`Connected to MongoDb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
