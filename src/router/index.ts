import { ProductRouter,ClientRouter } from "../components";
 
const routes = [
    ["products", ProductRouter],
    ["clients", ClientRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};