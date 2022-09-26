import { Request, Response } from "express"

import User from './Model';

export default {
    async index(req: Request, res: Response): Promise<void> {
        const user = {};
        res.send('ok');
    },
    async create(req: Request, res: Response): Promise<void> {
        
        const user = {};
        res.json({ Hello: 'World' });
    },
}