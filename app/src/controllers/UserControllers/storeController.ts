import { Request, Response } from "express";

import { createOne } from '../../services/UserService';

export async function storeController(req: Request, res: Response): Promise<Response> {
    
  try {
    
    const user = await createOne(req.body);
    return res.json(user);
  }
  
  catch (err) {

    return res.status(400).json({
      error: `An error has occurred: ${err}`
    });
  }
}