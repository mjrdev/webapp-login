import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { findOneByNameOrEmail } from '../services/UserService';
import secret from '../secret.json';
import { User } from '../Models/Model';

interface IUserLogin {
  user: any,
  secret: string
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {

    const { username, password } = req.body
    if(!username || !password) {
      
      throw new Error('Not are data');
    }

    const user: any = await User.findOne({ username })
    
    if(user) {
      
      const verifyPassword = await bcrypt.compare(password, user.password)

      if(!verifyPassword) throw new Error('username or password has incorrect')
    } else {

      throw new Error('username or password has incorrect');
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, secret.hash, {
      expiresIn: '5m', 
    });

    const LoginResponse: IUserLogin = {
      user, secret: token
    }

    return res.json(LoginResponse);
  }
  
  
  catch(err: any) {

    return res.status(401).json({
      message: err.message
    })
  }
}

export async function logout(req: Request, res: Response): Promise<any> {
  res.json({ logout: true });
}