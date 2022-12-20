import express from "express";
import {
  users,
  user,
  createUser,
  updateUser,
  removeUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/users", users);
router.get("/users/:id", user);

router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", removeUser);

export default router;
