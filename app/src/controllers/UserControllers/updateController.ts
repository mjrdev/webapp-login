import { Request, Response } from "express";

import { updateOne } from '../../services/UserService';

export async function updateController(req: Request, res: Response): Promise<Response> {
    
  try {
    
    const user = await updateOne(req.params.id, req.body);
    return res.json(user);
  }
  
  catch (err) {

    return res.status(400).json({
      error: `An error has occurred: ${err}`
    });
  }
}