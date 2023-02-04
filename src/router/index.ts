import { ProductRouter, OrderRouter, ClientRouter, userRouter, SupplierRouter, OrderDetailRouter, categoryRouter, smsRouter } from "../components";
 
const routes = [
    ["products", ProductRouter],
    ["clients", ClientRouter],
    ["orders",OrderRouter],
    ["users",userRouter],
    ["suppliers", SupplierRouter],
    ["order-detail",OrderDetailRouter],
    ["categories", categoryRouter],
    ["sms", smsRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};
