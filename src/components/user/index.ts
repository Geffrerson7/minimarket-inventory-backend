import { Router } from "express";
import { findAll, login, signup, getOne, update, remove } from "./controller";

const userRouter: Router = Router();

userRouter.get("/", findAll);
userRouter.get("/:idUser", getOne);
userRouter.put("/:idUser", update);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete("/:idUser", remove)

export default userRouter;
