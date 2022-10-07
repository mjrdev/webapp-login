import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import secret from '../secret.json'

export default async function Auth(req: Request, res: Response, next: NextFunction): Promise<any> {

  try {
    
    if(!req.headers.token && !req.cookies.token && !req.body.token) {
      throw new Error('You not have you are not authorized to access this page');
    }

    const token = req.headers.token || req.cookies.token || req.body.token;
    const decoded = jwt.verify(token, secret.hash)

    req.body.auth = decoded
    
    return next()
  }

  catch(err: any) {
    return res.status(401).json({
      message: err.message
    })
  }
} 