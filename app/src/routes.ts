import { Router } from "express";
import Controllers from "./Controllers";

const routes = Router()

routes.get('/users', Controllers.index);
routes.post('/user', Controllers.create);

export default routes