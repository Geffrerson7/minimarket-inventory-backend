import { Router } from "express";
import { sendSms } from "./controller";

const smsRouter: Router = Router();

smsRouter.post("/", sendSms);

export default smsRouter;