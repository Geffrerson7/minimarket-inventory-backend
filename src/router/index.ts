import { ProductRouter, OrderRouter, ClientRouter, userRouter, SupplierRouter, OrderDetailRouter, categoryRouter } from "../components";
import { smsRouter } from "../services";
 
const routes = [
    ["products", ProductRouter],
    ["clients", ClientRouter],
    ["orders",OrderRouter],
    ["users",userRouter],
    ["suppliers", SupplierRouter],
    ["sms", smsRouter],
    ["order-detail",OrderDetailRouter],
    ["categories", categoryRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};
