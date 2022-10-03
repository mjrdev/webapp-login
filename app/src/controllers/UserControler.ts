import { Request, Response } from "express";

import { createOne, findAll, findOne, updateOn, deleteOne  } from '../services/UserService';

import { User } from "../Models/Model";

export { showController as show } from './UserControllers/showController';
export { indexController as index } from './UserControllers/indexController';
export { storeController as store } from './UserControllers/storeController';
export { updateController as update } from './UserControllers/updateController';


export async function destroy(req: Request, res: Response): Promise<Response> {
    
  const user = await User.findByIdAndDelete(req.params.id);

  return res.status(204).json({
    msg: 'deleted'
  });
}
