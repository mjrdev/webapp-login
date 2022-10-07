import { Request, Response } from "express";

import { findOne } from '../../services/UserService';

export async function showController(req: Request, res: Response): Promise<Response> {
    
  try {

    const user = await findOne(req.params.id)
    return res.json(user);
  }
  
  catch(err: any) {

    return res.status(400).json({
      error: 'não foi possivel localizar o usuário'
    });
  }
}