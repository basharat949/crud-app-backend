import express from "express";
import {
  create,
  getAll,
  getUserById,
  update,
  deleteUser,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getUserById/:id", getUserById);
route.put("/update/:id", update);
route.delete("/deleteUser/:id", deleteUser);

export default route;
