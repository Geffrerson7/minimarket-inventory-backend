import { ProductRouter, SupplierRouter } from "../components";

const routes = [
    ["products", ProductRouter],
    ["suppliers", SupplierRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};