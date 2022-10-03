import { Request, Response } from "express";

export default {
  
  async login(req: Request, res: Response): Promise<any> {
    res.json({ login: true })
  },

  async logout(req: Request, res: Response): Promise<any> {
    res.json({ logout: true })
  }
}