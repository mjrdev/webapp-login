import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import User from "../Model";

export default {
    async index(req: Request, res: Response): Promise<any> {

        const user = await User.find();
        
        return res.json(user);
    },

    async show(req: Request, res: Response): Promise<any> {
        
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async store(req: Request, res: Response): Promise<any> {
        
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);

        return res.json(user);
    },

    async update(req: Request, res: Response): Promise<any> {
        
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

        return res.json(user);
    },

    async destroy(req: Request, res: Response): Promise<any> {
        
        const user = await User.findByIdAndDelete(req.params.id);

        return res.json(user);
    },
}