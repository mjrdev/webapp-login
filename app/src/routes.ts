import { Router } from "express";
import { index, show, store, update, destroy } from "./controllers/UserControler";
import LoginController from "./controllers/AuthenticationController";

const routes = Router()

routes.get('/users', index);
routes.post('/user', store);
routes.get('/user/:id', show);
routes.put('/user/:id', update);
routes.delete('/user/:id', destroy);

routes.post('/login', LoginController.login);
routes.post('/login', LoginController.logout);

export default routes