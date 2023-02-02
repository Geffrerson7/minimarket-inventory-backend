import { ProductRouter,OrderRouter } from "../components";
 
const routes = [
    ["products", ProductRouter],
    ["orders",OrderRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};