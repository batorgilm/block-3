import express from "express";
import mongoose from "mongoose";
import usersRouter from "./router/user.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);

const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 8000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running ${port}`);
});
