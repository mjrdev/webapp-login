import { Request, Response } from "express";

import { findAll } from '../../services/UserService';

export async function indexController(req: Request, res: Response): Promise<Response> {

  try {

    const users = await findAll();
    return res.json(users);
  }
  
  catch(err: any) {
    
    return res.status(400).json({
      error: err.message
    });
  }
}