import { Router } from "express";
import { index, show, store, update, destroy } from "./controllers/UserControler";
import { login, logout } from "./controllers/AuthenticationController";

import Auth from './middlewares/Authentication';

const routes = Router()

routes.get('/users', Auth, index);
routes.post('/user', store);
routes.get('/user/:id', show);
routes.put('/user', Auth, update);
routes.delete('/user', Auth, destroy);

routes.post('/login', login);
routes.post('/login', logout);

export default routes