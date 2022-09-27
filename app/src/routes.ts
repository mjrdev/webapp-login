import { Router } from "express";
import UserController from "./controllers/UserControler";
import LoginController from "./controllers/LoginController";

const routes = Router()

routes.get('/users', UserController.index);
routes.post('/user', UserController.store);
routes.get('/user/:id', UserController.show);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

routes.post('/login', LoginController.login);
routes.post('/login', LoginController.logout);

export default routes