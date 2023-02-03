import { ProductRouter,OrderRouter,ClientRouter, userRouter, SupplierRouter, categoryRouter } from "../components";
 
const routes = [
    ["products", ProductRouter],
    ["clients", ClientRouter],
    ["orders",OrderRouter],
    ["users",userRouter],
    ["suppliers", SupplierRouter],
    ["categories", categoryRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};
