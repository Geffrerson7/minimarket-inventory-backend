import { Router } from "express";
import { store,findAll, deleteSupplier, updateSupplier, findById} from "./controller";

const supplierRouter: Router = Router();

supplierRouter.post("/", store);
supplierRouter.get("/", findAll);
supplierRouter.get("/:idSupplier", findById);
supplierRouter.put("/:idSupplier", updateSupplier);
supplierRouter.delete("/:idSupplier", deleteSupplier);
export default supplierRouter;