import { Router } from "express";
import { store } from "./controller";

const productRouter: Router = Router();

productRouter.post("/", store);

export default productRouter;