import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "./config.js";
import usersRouter from "./router/user.js";

const app = express();

app.use(express.json());
app.use("/users", usersRouter);

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  connect();
  console.log(`Server running ${PORT}`);
});
