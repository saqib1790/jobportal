import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testroutes from "./routes/testroutes.js";
import authrouter from "./routes/authrouter.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/test", testroutes);
app.use("/api/v1/auth", authrouter);
const port = process.env.PORT;
app.listen(8080, () => {
  console.log(`Server is running on ${port}`);
});
