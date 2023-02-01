import { ProductRouter } from "../components";
 
const routes = [
    ["products", ProductRouter]
]

export const router = (app:any) => {
    routes.forEach(([path, controller]) => 
    app.use(`/api/v1/${path}`, controller))
    ;
};