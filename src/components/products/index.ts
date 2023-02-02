import { Router } from "express";
import { store, findAll,get_product_by_id, update_product, delete_product_by_id } from "./controller";

const productRouter: Router = Router();

productRouter.post("/", store);
productRouter.get("/", findAll);
productRouter.get("/:id", get_product_by_id);
productRouter.put("/:id", update_product);
productRouter.delete("/:id", delete_product_by_id);

export default productRouter;