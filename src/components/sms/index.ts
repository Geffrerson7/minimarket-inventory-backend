import { Router } from "express";
import { test } from "./controller";

const smsRouter: Router = Router();

smsRouter.post("/", test);

export default smsRouter;