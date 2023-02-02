import { Router } from "express";
import * as Controller from "./controller";

const OrderRouter: Router = Router();

OrderRouter.post("/", Controller.store);
OrderRouter.get("/", Controller.findAll);
OrderRouter.get("/:idOrder", Controller.getOne);
OrderRouter.put("/:idOrder", Controller.update);
OrderRouter.delete("/:idOrder", Controller.remove);

export default OrderRouter;