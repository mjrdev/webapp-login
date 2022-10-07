import { Request, Response } from "express";

import { deleteOne } from '../../services/UserService';

export async function destroyController(req: Request, res: Response): Promise<Response> {
    
  try {
    const user = await deleteOne(req.params.id)

    return res.send({
      message: 'usuário deletado com sucesso'
    })
  }
  
  catch(err: any) {

    return res.status(400).json({
      error: 'erro ao deletar usuário'
    });
  }
}