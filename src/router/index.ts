import { ProductRouter,OrderRouter,ClientRouter } from "../components";
 
const routes = [
    ["products", ProductRouter],
    ["clients", ClientRouter],
    ["orders",OrderRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};
