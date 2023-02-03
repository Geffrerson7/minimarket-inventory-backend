import { Router } from "express";
import * as Controller from "./controller";

const OrderDetailRouter: Router = Router();

OrderDetailRouter.post("/", Controller.store);
OrderDetailRouter.get("/:idOrder", Controller.getOne);
OrderDetailRouter.put("/update/:idOrder", Controller.updateOne);

export default OrderDetailRouter;