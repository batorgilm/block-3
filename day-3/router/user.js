import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  removeUser,
} from "../controller/user.js";

import { checkTokenMiddleWare } from "../middleware/middleware.js";

const router = express.Router();

router.route("/").get(checkTokenMiddleWare).get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(removeUser);

export default router;
