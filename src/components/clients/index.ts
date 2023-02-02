import { Router } from "express";
import * as Controller from "./controller";

const clientRouter: Router = Router();

clientRouter.post("/", Controller.store);
clientRouter.get("/", Controller.findAll);
clientRouter.get("/:idClient", Controller.getOne);
clientRouter.put("/:idClient", Controller.update);
clientRouter.delete("/:idClient", Controller.remove);

export default clientRouter;
