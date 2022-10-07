import { Request, Response } from "express";

import { createOne, findAll, findOne, updateOne, deleteOne  } from '../services/UserService';

import { User } from "../Models/Model";

export { showController as show } from './UserControllers/showController';
export { indexController as index } from './UserControllers/indexController';
export { storeController as store } from './UserControllers/storeController';
export { updateController as update } from './UserControllers/updateController';
export { destroyController as destroy } from './UserControllers/destroyController';